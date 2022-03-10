import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import BtnOpacity from "../button/btn-opacity";
import flex, { colors,  color, metrics, text  } from "../theme/theme-style";

export default function HeaderWithSearch( { searchAction } ) {

    const [search, updateSearchText] = useState('');

    return (<>
        <View
            style={[
                metrics.padding,
                color.bgDefault
            ]}
        >

            <View style={flex.row}>
                <Text
                    style={[
                        color.textWhite,
                        styles.title,
                    ]}
                >Product</Text>

                <Text
                    style={[
                        color.textWhite,
                        text.alignEnd,
                        styles.title,
                    ]}
                >X</Text>
            </View>

            <View
                style={[
                    flex.row
                ]}
            >
                <View>
                    <TextInput
                        style={[
                            color.bgWhite,
                            color.textBlack,
                            metrics.marginTop,
                            styles.inputSearch
                        ]}
                        onChangeText={updateSearchText}
                        value={search} />
                </View>
                <View
                    style={{ paddingTop: 7 }}
                >
                    <Icon
                        size={16}
                        raised
                        name='search'
                        type='font-awesome'
                        color={ colors.default }
                        onPress={() => searchAction( search )} />
                </View>
            </View>

            <View
                style={[
                    flex.row,
                    flex.justifyBetween,
                    metrics.marginTop,
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
        fontSize: 14,
        padding: 8
    },

    title: {
        fontSize: 18,
        fontWeight: '500',
        width: '50%'
    },
});