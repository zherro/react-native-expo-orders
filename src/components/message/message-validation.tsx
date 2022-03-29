import React from "react";
import { StyleSheet, Text } from "react-native";
import { colors } from "../theme/theme-style";

export default function MessageValidation( { 
    fontColor=colors.white,
    message
} ) {
    return (
        <Text
            style={[
                styles.message,
                { color: fontColor }
            ]}>
            { message }
        </Text>
    );
}

const styles = StyleSheet.create({
    message: {
        marginBottom: 15,
        fontWeight: 'bold',
    }
});