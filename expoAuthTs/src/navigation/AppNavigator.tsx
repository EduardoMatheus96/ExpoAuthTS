import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import DashBoardScreen from "../screens/DashboardScreen";


type RootStackParamList = {
    Login: undefined;
    Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();


const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <Stack.Screen name="Dashboard" component={DashBoardScreen} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />

                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;