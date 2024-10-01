import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import { useAuth } from '../context/AuthContext';
import { globalStyles } from '../styles/globalStyles';
import { RegisterSchema } from '../validationSchemas';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../types/interfaces';
import CustomButton from '../shared/components/CustomButton';

const RegisterForm = () => {
  const { register } = useAuth();
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting, setFieldError }) => {
        try {
          await register(values.name, values.email, values.password);
          Alert.alert('Sucesso', 'Conta criada com sucesso!');
          setTimeout(() => {
            navigation.goBack();
        }, 1000);
        } catch (error: any) {
          setFieldError('general', error.message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View>
          <TextInput
            style={globalStyles.input}
            placeholder="Nome"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text style={globalStyles.errorText}>{errors.name}</Text>}
          
          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && <Text style={globalStyles.errorText}>{errors.email}</Text>}
          
          <TextInput
            style={globalStyles.input}
            placeholder="Senha"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={globalStyles.errorText}>{errors.password}</Text>}
          
          <TextInput
            style={globalStyles.input}
            placeholder="Confirmar Senha"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
          />
          {touched.confirmPassword && errors.confirmPassword && <Text style={globalStyles.errorText}>{errors.confirmPassword}</Text>}
          
          <CustomButton
                        text="Cadastrar"
                        onPress={() => handleSubmit()}
                        disable={isSubmitting}
                    />
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;