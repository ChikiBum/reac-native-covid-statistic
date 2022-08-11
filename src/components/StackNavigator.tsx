import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryDetails from "../screens/CountryDetails";
import CountriesStatistic from "../screens/CountriesStatistic";
import { ROUTER_KEYS } from "../constants/ROUTER_KEYS";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ROUTER_KEYS.COUNTRIES_SCREEN}>
            <Stack.Screen name={ROUTER_KEYS.COUNTRIES_SCREEN} component={CountriesStatistic} />
            <Stack.Screen name={ROUTER_KEYS.ONE_COUNTRY_SCREEN} component={CountryDetails} />
        </Stack.Navigator>
    );
}
