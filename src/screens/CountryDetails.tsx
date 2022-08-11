import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { QUERY_KEYS } from "../constants/QUERY_KEYS";
import Loading from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";
import { IMAGES_URL } from "../constants/IMAGES_URL";
import TotalDataItem from "../components/TotalDataItem";

interface Props {
    route: any;
}

const image = {
    uri: IMAGES_URL.COUNTRIES_BKG,
};

const CountryDetails: FC<Props> = ({ route }) => {
    const { countrySlug } = route.params;

    const { isLoading, data, isError, error } = useQuery(QUERY_KEYS.GET_ONE_COUNTRY_DATA, async () => {
        return await axios.get(`https://api.covid19api.com/live/country/${countrySlug}`);
    });

    isLoading && <Loading />;

    isError && <ErrorPage message={error.message} />;

    const lastElement = data?.data.slice(-1)[0];
    if (lastElement !== undefined) {
        const { Country, Confirmed, Deaths, Recovered, Active } = lastElement;

        return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                    <Text>Country: {Country}</Text>
                    <TotalDataItem name="Confirmed" count={Confirmed} />
                    <TotalDataItem name="Deaths" count={Deaths} />
                    <TotalDataItem name="Recovered" count={Recovered} />
                    <TotalDataItem name="Active" count={Active} />
                </View>
            </ImageBackground>
        );
    } else {
        return (
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.container}>
                    <TotalDataItem name="Data not finded" count={403} />
                </View>
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
});

export default CountryDetails;
