import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import BtnOpacity from "../../../components/button/btn-opacity";
import FlatListItem from "../../../components/list/flat-item";
import TextCenter from "../../../components/text/text-center";
import flex, { colors, metrics, text } from "../../../components/theme/theme-style";

export default function OrderListView({ reloadData, data, error }) {

    return (
        <View
            style={[
                { flex: 1, flexDirection: 'column', },
            ]}
        >
            <ScrollView style={{ paddingBottom: 70 }}>
                <View>
                    <View style={styles.list}>
                        {
                            data?.map((order, i) => (
                                <TouchableOpacity key={i} onPress={() => { }}>
                                    <FlatListItem
                                        title={"Order Number: " + order?.orderUser?.id}
                                        subtitle={"Created by: " + order?.orderUser?.user}
                                        textAux1={'$ ' + order?.orderUser?.value}
                                        textAux2={'Itens: ' + order?.orderUser?.qtd}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View>
                        {error ? <Text style={[text.alignCenter, metrics.marginVertical]}>{error}</Text> : null}
                    </View>
                    <View>
                        {data?.length <= 0 ? <Text style={{ textAlign: "center" }} >{'No orders registered!'}</Text> : null}
                    </View>
                    <View
                        style={[
                            flex.row,
                            flex.justifyCenter,
                            metrics.marginVertical,
                        ]}
                    >
                        {
                            data?.length > 0 
                                ? null
                                : <BtnOpacity
                                sTitle={'Reload Data'}
                                nWidth={120}
                                color={colors.default}
                                centerText={true}
                                action={() => reloadData()}
                            />
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.default,
    },
});