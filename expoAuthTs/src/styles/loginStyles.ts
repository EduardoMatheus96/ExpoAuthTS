import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
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
    }
})