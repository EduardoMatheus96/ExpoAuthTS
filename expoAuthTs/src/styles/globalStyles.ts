import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
        marginTop: 40
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: "#fff",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#4a90e2",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    errorText: {
        color: "#e74c3c",
        marginBottom: 10,
        fontSize: 14
    },
    link: {
        color: "#4a90e2",
        textAlign: "center",
        marginTop: 15,
        fontSize: 16
    }
})