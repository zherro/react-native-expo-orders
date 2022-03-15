import React from "react";
import { Text } from "react-native";
import { color, colors } from "../theme/theme-style";

export default function TextCenter({
    text,
    colorText=colors.white,
    marginTop=40,
    fontSize=18,
}) {
    return (
        <Text
            style={[
                {color: colorText},
                { fontSize: fontSize },
                { marginTop: marginTop},
                { textAlign: "center"},
            ]}
        >
            { text }
        </Text>
    );
}