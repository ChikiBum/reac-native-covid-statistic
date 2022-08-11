import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
    message: string;
}

const ErrorPage: FC<Props> = ({ message }) => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <Text>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    horizontal: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
    },
});

export default ErrorPage;
