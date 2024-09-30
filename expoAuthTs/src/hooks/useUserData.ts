import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { UserData } from "../types/interfaces";

export const useUserData = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const  [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const storedUser = await AsyncStorage.getItem("user");
                if (storedUser) {
                    const parsedUser = JSON.parse(storedUser);
                    setUserData({
                        email: parsedUser.email,
                        lastLogin: new Date().toLocaleString(),
                    });

                }
            } catch (error) {
                alert(`Erro ao carregar dados do usúario, ${error}`);
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);
    return { userData, loading };
};