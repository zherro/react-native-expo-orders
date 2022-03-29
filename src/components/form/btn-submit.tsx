import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { color, colors, text } from "../theme/theme-style";

export default function BtnSubmit({
    title,
    onPressAction,
}) {
    return (
        <TouchableOpacity
            style={[
                styles.input,
                color.bgWhite
            ]}
            onPress={onPressAction}
        >
            <Text style={[color.textDefault, text.alignCenter, { fontSize: 14 }]}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: colors.white,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 25,
        padding: 8,
        fontSize: 14,
        marginVertical: 8,
        marginBottom: 15,
    }
});