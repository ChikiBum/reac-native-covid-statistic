import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import CountriesStatistic from "./src/screens/CountriesStatistic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { COLORS } from "./src/styles/theme";
import { ROUTER_KEYS } from "./src/constants/ROUTER_KEYS";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./src/components/StackNavigator";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();
// const Stack = createNativeStackNavigator();

const headerStyle = {
    headerStyle: { backgroundColor: COLORS.black },
    tabBarStyle: { backgroundColor: COLORS.black },
    tabBarBadgeStyle: { backgroundColor: COLORS.green },
    headerTitleStyle: { color: COLORS.green },
};

export default function App() {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                {/* <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
                    <Stack.Screen name={ROUTER_KEYS.ONE_COUNTRY_SCREEN} component={CountryDetails} options={{ headerShown: false }} />
                </Stack.Navigator> */}
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerTitleAlign: "center",
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === ROUTER_KEYS.HOME_SCREEN) {
                                iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                            } else if (route.name === ROUTER_KEYS.STACK) {
                                iconName = focused ? "ios-list-circle" : "ios-list";
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: COLORS.green,
                        tabBarInactiveTintColor: COLORS.gray,
                    })}
                    initialRouteName={ROUTER_KEYS.HOME_SCREEN}
                >
                    <Tab.Screen name={ROUTER_KEYS.HOME_SCREEN} component={HomeScreen} options={headerStyle} />
                    {/* <Tab.Screen name={ROUTER_KEYS.COUNTRIES_SCREEN} component={CountriesStatistic} options={headerStyle} /> */}
                    <Tab.Screen name={ROUTER_KEYS.STACK} component={StackNavigator} options={headerStyle} />
                </Tab.Navigator>
            </QueryClientProvider>
        </NavigationContainer>
    );
}
