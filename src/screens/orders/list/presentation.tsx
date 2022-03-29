import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import BtnOpacity from "../../../components/button/btn-opacity";
import FlatListItem from "../../../components/list/flat-item";
import TextCenter from "../../../components/text/text-center";
import flex, { colors, metrics, text } from "../../../components/theme/theme-style";

export default function CarrListView({ reloadData, data, submitOrder, error, submited }) {

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
                            data.map((product, i) => (
                                <TouchableOpacity key={i} onPress={() => { }}>
                                    <FlatListItem
                                        title={product.title}
                                        subtitle={product.available}
                                        textAux1={'$ ' + product.price}
                                        textAux2={'Qtd: ' + product.qtd}
                                    />
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View>
                        {error ? <Text style={[text.alignCenter, metrics.marginVertical]}>{error}</Text> : null}
                    </View>
                    <View>
                        {data?.length <= 0 ? <Text style={{ textAlign: "center" }} >{'Dont has itens in cart!'}</Text> : null}
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
                                ? <BtnOpacity
                                    sTitle={'Submit'}
                                    nWidth={120}
                                    color={colors.default}
                                    centerText={true}
                                    action={() => submitOrder(data)}
                                />
                                : <BtnOpacity
                                sTitle={'Update Cart'}
                                nWidth={120}
                                color={colors.default}
                                centerText={true}
                                action={() => reloadData()}
                            />
                        }
                        {
                            !submited ? null : <Button type="clear" title="SENDING..." loading={true} style={{ marginTop: 15 }} />

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