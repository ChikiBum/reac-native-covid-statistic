import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView } from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "../constants/QUERY_KEYS";
import Loading from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import { COLORS } from "../styles/theme";
import TotalDataItem from "../components/TotalDataItem";
import { IMAGES_URL } from "../constants/IMAGES_URL";

const image = {
    uri: IMAGES_URL.HOME_BKG,
};

export default function HomeScreen() {
    const { isLoading, data, isError, error } = useQuery(QUERY_KEYS.GET_TOTAL_DATA, async () => {
        return await axios.get("https://api.covid19api.com/summary");
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <ErrorPage message={error.message} />;
    }

    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = data.data.Global;

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <SafeAreaView>
                <StatusBar animated={true} backgroundColor={COLORS.gray} hidden={false} />
                <View style={styles.date}>
                    <Text>Data: {String(Date).slice(0, 10)}</Text>
                </View>

                <ScrollView>
                    <View style={styles.container}>
                        <TotalDataItem name="NewConfirmed" count={NewConfirmed} />
                        <TotalDataItem name="TotalConfirmed" count={TotalConfirmed} />
                        <TotalDataItem name="NewDeaths" count={NewDeaths} />
                        <TotalDataItem name="TotalDeaths" count={TotalDeaths} />
                        <TotalDataItem name="NewRecovered" count={NewRecovered} />
                        <TotalDataItem name="TotalRecovered" count={TotalRecovered} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", paddingHorizontal: 10, paddingTop: 10 },
    date: {
        height: 30,
        backgroundColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});
