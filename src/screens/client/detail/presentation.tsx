import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-elements";
import flex from "../../../components/theme/theme-style";

export default function ClientDetailView({ client }) {
    return (
        <View
            style={[
                {flex:1},
                flex.contentCenter,
                flex.column,
            ]}
        >
            <Image
                source={{ uri: client?.avatar_url }}
                containerStyle={[
                    styles.item,
                    styles.spaceTop
                ]}
            />
            <Text h3 style={[
                { color: 'red' },
                styles.spaceTop
            ]}>{ client?.name }</Text>
            <Text style={[
                { color: 'gray' },
                styles.spaceTop
            ]}>{ client?.doc }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    spaceTop: {
        marginTop: 30
    },
    item: {
        aspectRatio: 1,
        height: 120,
        maxHeight: 120,
        maxWidth: 120,
        borderRadius: 60,
        flex: 1,
    },
});
