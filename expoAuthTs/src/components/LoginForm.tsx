import { Button, Text, TextInput, View, StyleSheet  } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useloginForm } from "../hooks/useLoginForm";

const LoginForm = () => {
    const { login } = useAuth();
    const { form, errors, handleChange, handleSubmit, isValid } = useloginForm((FormData) => {
        login(FormData.email, FormData.password);
    });

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={form.email}
                onChangeText={(value: string) => handleChange("email", value)}
                keyboardType="email-address"
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={form.password}
                onChangeText={(value: string) => handleChange("password", value)}
                secureTextEntry
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <Button title="Entrar" onPress={handleSubmit} disabled={isValid}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
});

export default LoginForm;