import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../components/LoginForm';
import { RegisterScreenNavigationProp } from '../types/interfaces';
import CustomTextButton from '../shared/components/CustomTextButton';

const LoginScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();   

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <LoginForm />
      <CustomTextButton
        text="Não tem uma conta? Cadastre-se"
        onPress={() => navigation.navigate('Register')}
        style={globalStyles.link} // Sobrescrevendo estilo, se necessário
      />
    </View>
  );
};

export default LoginScreen;