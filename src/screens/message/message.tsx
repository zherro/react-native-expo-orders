import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { color, colors } from "../../components/theme/theme-style";

export default function MessageView({ navigation, route }) {

    // title = '',
    // msg = '',
    // btnTitle = 'Ok',
    // action,
    // type="success"

    const { props } = route.params;

    console.log(props)

    const messageType = props?.type === "success" ? color.bgDefault : color.bgDanger

    return (
        <View style={[
            style.container,
            messageType,
        ]} >
            <View style={[{ flex: 5, marginTop: 50 }]} >
                {
                    props?.title ?
                        <Text style={style.title}> {props?.title} </Text> : null
                }
                <Text style={style.text}> {props?.msg} </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button title={props?.btnTitle} onPress={props?.action} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 15,
    },
    title: {
        fontWeight: "500",
        marginBottom: 20,
        fontSize: 23,
        textAlign: "center",
        color: colors.white,
    },
    text: {
        fontSize: 22,
        textAlign: "center",
        color: colors.white,
    }
});