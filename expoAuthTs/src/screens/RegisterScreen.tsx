import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../components/RegisterForm';
import { LoginScreenNavigationProp } from '../types/interfaces';
import CustomTextButton from '../shared/components/CustomTextButton';

const RegisterScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Cadastro</Text>
      <RegisterForm />
      <CustomTextButton
        text="Já tem uma conta? Faça login"
        onPress={() => navigation.navigate('Login')}
        style={globalStyles.link} // Sobrescrevendo estilo, se necessário
      />
    </View>
  );
};

export default RegisterScreen;