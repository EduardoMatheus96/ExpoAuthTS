import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
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