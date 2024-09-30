import { Text, Button, View, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { useUserData } from "../hooks/useUserData";
import { screenStyles } from "../styles/screenStyles";

const DashBoardScreen = () => {
    const { logout } = useAuth();
    const { userData, loading } = useUserData();

    if (loading) {
        return (
            <View style={screenStyles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={screenStyles.container}>
            <Text style={screenStyles.welcomeText}>Bem-vindo, {userData?.email}!</Text>
            <Text style={screenStyles.lastLoginText}>Último login: {userData?.lastLogin}</Text>
            <Button title="Sair" onPress={logout} />
        </View>
    )
}

export default DashBoardScreen;