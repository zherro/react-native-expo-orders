import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import flex, { color, metrics, text } from "../../components/theme/theme-style";

export default function ProductDetailView({
    product,
    added,
    addProductToCart,
    submited
}) {

    return (
        <View>
            <View
                style={[
                    styles.card,
                    metrics.padding,
                    metrics.marginVertical,
                ]}
            >
                <View
                    style={[
                        flex.row,
                        flex.justifyBetween,
                        metrics.marginTop
                    ]}
                >
                    <Text style={[
                        product?.available ? color.bgDefault : color.bgDanger,
                        color.textWhite,
                        styles.status
                    ]}>
                        {product?.available ? 'A' : 'U'}
                    </Text>
                    <Text
                        style={[
                            color.textDefault,
                            { fontWeight: "500" }
                        ]}
                    >R$ {product?.price}</Text>
                </View>
            </View>
            <View style={{height: 20, marginVertical:15}}>
                <View style={[flex.row, flex.justifyCenter]}>
                    {/* { submited && <Text>Adicionando item...</Text>} */}
                    {
                        added?.qtd != null
                            ? <Text>{`${added?.qtd} added`}</Text>
                            : <Button type="clear" loading={true} style={{marginTop: 15}} />
                    }
                </View>
            </View>
            <View
                style={[
                    metrics.padding,
                    metrics.marginVertical,
                    flex.row,
                    flex.justifyCenter,
                    {marginTop: 20}
                ]}
            >
                <TouchableOpacity
                    onPress={() => addProductToCart()}
                    disabled={submited}
                >
                    <Text
                        style={[
                            styles.btnAdd,
                            color.bgDefault,
                            color.textWhite,
                            text.alignCenter,
                        ]}
                    >Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnAdd: {
        minWidth: 180,
        fontSize: 16,
        borderRadius: 25,
        padding: 8,
    },
    card: {
        height: 80,
        backgroundColor: "#fff"
    },
    status: {
        borderRadius: 5,
        width: 16,
        height: 16,
        textAlign: "center"
    }
});