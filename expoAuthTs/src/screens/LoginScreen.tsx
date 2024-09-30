import React from 'react';
import LoginForm from "../components/LoginForm";
import { View, Text, StyleSheet  } from 'react-native';
import { screenStyles } from '../styles/screenStyles';

const LoginScreen = () => {
    return (
        <View style={screenStyles.container}>
            <Text style={screenStyles.title}>Tela de Login</Text >
            <LoginForm />
        </View>
    );
}

export default LoginScreen;