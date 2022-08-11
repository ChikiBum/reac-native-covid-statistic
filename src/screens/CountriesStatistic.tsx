import React, { FC } from "react";
import axios from "axios";
import { QUERY_KEYS } from "../constants/QUERY_KEYS";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from "react-native";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import Country from "../components/Country";
import { COLORS } from "../styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IMAGES_URL } from "../constants/IMAGES_URL";

const Stack = createNativeStackNavigator();

const image = {
    uri: IMAGES_URL.COUNTRIES_BKG,
};

type Props = {
    navigation: any;
};

const CountriesStatistic: FC<Props> = ({ navigation }) => {
    const { isLoading, data, isError, error } = useQuery(QUERY_KEYS.GET_COUNTRIES_DATA, async () => {
        return await axios.get("https://api.covid19api.com/countries");
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorPage message={error.message} />;
    }

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <SafeAreaView>
                <StatusBar animated={true} backgroundColor={COLORS.gray} hidden={false} />
                <FlatList numColumns={3} data={data.data} renderItem={({ item }) => <Country name={item.Country} slug={item.Slug} navigation={navigation} />} keyExtractor={(item) => item.Country} />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});

export default CountriesStatistic;
