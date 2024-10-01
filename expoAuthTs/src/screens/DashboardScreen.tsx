import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { globalStyles } from '../styles/globalStyles';
import CustomButton from '../shared/components/CustomButton';

const DashboardScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Dashboard</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Bem-vindo, {user?.name}!</Text>
      <Text style={{ fontSize: 16, marginBottom: 30 }}>Email: {user?.email}</Text>
      
      <CustomButton
        text="Sair"
        onPress={logout}
      />
    </View>
  );
};

export default DashboardScreen;