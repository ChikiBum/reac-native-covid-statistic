import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/theme";

interface Props {
    name: string;
    count: number;
}

const TotalDataItem: FC<Props> = ({ name, count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {name} : {count}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 85,
        borderWidth: 1,
        borderRadius: 15,
        margin: 3,
        backgroundColor: "rgba(255, 255, 255, 0.15)", //white
    },
    text: {
        textAlign: "center",
        color: COLORS.green,
    },
});

export default TotalDataItem;
