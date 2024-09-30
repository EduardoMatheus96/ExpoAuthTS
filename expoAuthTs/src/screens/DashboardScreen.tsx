import { Text, Button, View, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../hooks/useUserData";

const DashBoardScreen = () => {
    const { logout } = useAuth();
    const { userData, loading } = useUserData();

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo, {userData?.email}!</Text>
            <Text style={styles.lastLoginText}>Último login: {userData?.lastLogin}</Text>
            <Button title="Sair" onPress={logout} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 10
    },
    lastLoginText: {
        fontSize: 14,
        marginBottom: 20,
    }
});

export default DashBoardScreen;