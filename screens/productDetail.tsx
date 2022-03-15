import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import flex, { color, colors, metrics, text } from "../components/theme/theme-style";
import { addToCart } from "../src/database/order-repository";

export default function ProductDetail({ navigation, route }) {

    const { product } = route.params;

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(null);
    const [qtd, setQtd] = useState(0);



    const addProductToCart = () => {
        setSubmit(true);
        addToCart(product, addCallback, setQtd);
    }

    const addCallback = (added) => {
        if (added) {
            setError(null);
            setSubmit(false);
        } else {
            setError('Unexpecte erro when try add item!');
            setSubmit(false);
        }
    };

    useEffect(() => {
        navigation.setOptions({ title: product.title });
    }, [product]);

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
            {
                error
                && <View>
                    <Text style={[color.textBlack, { textAlign: "center" }]}>
                        ERROR: {error}
                    </Text>
                </View>
            }
            {
                qtd > 0
                && <View>
                    <Text style={[color.textBlack, { textAlign: "center" }]}>
                        Added {qtd} itens to cart.
                    </Text>
                </View>
            }
            <View
                style={[
                    metrics.padding,
                    metrics.marginVertical,
                    flex.row,
                    flex.justifyCenter,
                ]}
            >
                <TouchableOpacity
                    onPress={() => addProductToCart()}
                    disabled={submit}
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
            <View
                style={[
                    metrics.padding,
                    metrics.marginVertical,
                    flex.row,
                    flex.justifyCenter,
                ]}
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    disabled={submit}
                >
                    <Text
                        style={[
                            styles.btnAdd,
                            color.bgWhite,
                            color.textDefault,
                            text.alignCenter,
                            { borderColor: colors.default, borderWidth: 1, borderStyle: "solid" }
                        ]}
                    >Go Back</Text>
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