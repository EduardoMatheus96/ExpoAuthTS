import React from 'react';
import LoginForm from "../components/LoginForm";
import { View, Text, StyleSheet  } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text >
            <LoginForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    }
});

export default LoginScreen;