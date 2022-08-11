import React from "react";
import { StyleSheet, Text, ActivityIndicator, View } from "react-native";

export default function Loading() {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
    },
});
