import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/theme-style";

export default function InputText({
    fontColor=colors.white,
    title,
    value,
    changeAction,
    onBlurAction,
    isPassword=false
}) {
    return (
        <View>
            <Text style={[
                {color: fontColor}
                ]}
            >
                { title }
            </Text>
            <TextInput
                value={value}
                style={[
                    styles.input,
                    {borderColor: fontColor},
                    {color: fontColor},
                ]}
                onChangeText={changeAction}
                onBlur={onBlurAction}
                secureTextEntry={isPassword}
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 25,
        padding: 8,
        fontSize: 14,
        marginVertical: 8,
        marginBottom: 15,
    }
});