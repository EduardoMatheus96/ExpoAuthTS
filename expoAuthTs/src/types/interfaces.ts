import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../navigation/AppNavigator";

export interface User {
    email: string;
    name: string;
    lastLogin?: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm extends LoginForm {
    name: string;
    comfirmPassword: string;
}

export interface AuthContextData {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export interface UserData {
    email: string;
    lastLogin: string;
}

export type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;