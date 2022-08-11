import React, { FC, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ROUTER_KEYS } from "../constants/ROUTER_KEYS";
import { COLORS } from "../styles/theme";

interface Props {
    name: string;
    slug: string;
    navigation: any;
}

const Country: FC<Props> = ({ name, navigation, slug }) => {
    const onPress = () => {
        navigation.navigate(ROUTER_KEYS.ONE_COUNTRY_SCREEN, {
            countrySlug: slug,
        });
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 15,
        margin: 3,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
    text: {
        textAlign: "center",
        color: COLORS.green,
    },
});

export default Country;
