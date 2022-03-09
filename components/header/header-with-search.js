import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import BtnOpacity from "../button/btn-opacity";
import { color, metrics, flex, text } from "../theme/theme";

export default function HeaderWithSearch() {
    return (<>
        <View
            style={[
                metrics().padding,
                color().bgDefault
            ]}
        >

            <View style={flex().row}>
                <Text
                    style={[
                        color().white,
                        styles.title,
                    ]}
                >Product</Text>

                <Text
                    style={[
                        color().white,
                        text().alignEnd,
                        styles.title,
                    ]}
                >X</Text>
            </View>

            <View>
                <TextInput
                    style={[
                        color().bgWhite,
                        color().black,
                        metrics().marginTop,
                        styles.inputSearch
                    ]}
                    value={'Search'} />
            </View>

            <View
                style={[
                    flex().row,
                    flex().justifyBetween,
                    metrics().marginTop,
                ]}
            >
                <BtnOpacity sTitle="Short By" nWidth={80} />
                <BtnOpacity sTitle="Location" nWidth={80} />
                <BtnOpacity sTitle="Category" nWidth={80} />
            </View>
        </View>
    </>);
}

const styles = StyleSheet.create({
    inputSearch: {
        borderRadius: 17,
        fontSize: 16,
        padding: 8
    },

    title: {
        fontSize: 18,
        fontWeight: "500",
        width: '50%'
    },
});