import { Button, Text, TextInput, View, StyleSheet  } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useloginForm } from "../hooks/useLoginForm";
import { loginStyles } from "../styles/loginStyles";

const LoginForm = () => {
    const { login } = useAuth();
    const { form, errors, handleChange, handleSubmit, isValid } = useloginForm((FormData) => {
        login(FormData.email, FormData.password);
    });

    return (
        <View style={loginStyles.container}>
            <TextInput
                style={loginStyles.input}
                placeholder="Email"
                value={form.email}
                onChangeText={(value: string) => handleChange("email", value)}
                keyboardType="email-address"
            />
            {errors.email && <Text style={loginStyles.errorText}>{errors.email}</Text>}

            <TextInput
                style={loginStyles.input}
                placeholder="Senha"
                value={form.password}
                onChangeText={(value: string) => handleChange("password", value)}
                secureTextEntry
            />
            {errors.password && <Text style={loginStyles.errorText}>{errors.password}</Text>}
            <Button title="Entrar" onPress={handleSubmit} disabled={isValid}/>
        </View>
    );
}

export default LoginForm;