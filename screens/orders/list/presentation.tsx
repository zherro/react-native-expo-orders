import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import BtnOpacity from "../../../components/button/btn-opacity";
import FlatListItem from "../../../components/list/flat-item";
import flex, { colors, metrics } from "../../../components/theme/theme-style";

export default function CarrListView({ data, submitOrder }) {
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
                    <View
                        style={[
                            flex.row,
                            flex.justifyCenter,
                            metrics.marginVertical,
                        ]}
                    >
                        <BtnOpacity
                            sTitle={'Submit'}
                            nWidth={120}
                            color={colors.default}
                            centerText={true}
                            action={() => submitOrder(data)}
                        />
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