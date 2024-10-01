import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthContextData } from '../types/interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };
    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    const usersData = await AsyncStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    const user = users.find((u: User & { password: string }) => 
      u.email === email && u.password === password
    );

    if (user) {
      const { name, email } = user;
      setUser({ name, email });
      await AsyncStorage.setItem('user', JSON.stringify({ name, email }));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // Retrieve stored users
    const usersData = await AsyncStorage.getItem('users');
    const users = usersData ? JSON.parse(usersData) : [];

    // Check if user already exists
    if (users.some((u: User) => u.email === email)) {
      throw new Error('User already exists');
    }

    // Add new user
    const newUser = { name, email, password };
    users.push(newUser);
    await AsyncStorage.setItem('users', JSON.stringify(users));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};