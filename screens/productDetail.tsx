import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import TextCenter from "../components/text/text-center";
import flex, { color, colors, metrics, text } from "../components/theme/theme-style";
import { addToCart, countCartItem } from "../src/database/order-repository";

export default function ProductDetail({ navigation, route }) {

    const { product } = route.params;

    const [submited, setSubmited] = useState(false);
    const [error, setError] = useState(null);
    const [cartStatus, setCartStatus] = useState(null);

    const addProductToCart = () => {
        setSubmited(true);
        addToCart(product, addCallback);
    }

    const addCallback = (added, qtd) => {
        if (added) {
            setSubmited(false);
            setError(null);
            setCartStatus(qtd);
        } else {
            setError('Unexpected result when attempt add item to cart! Sorry!!!');
        }
    }

    useEffect(() => {
        countCartItem(product.id, addCallback);
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
            <View style={{height: 20, marginVertical:15}}>
                <View style={[flex.row, flex.justifyCenter]}>
                    {/* { submited && <Text>Adicionando item...</Text>} */}
                    {
                        cartStatus != null && cartStatus != undefined
                            ? <TextCenter text={`${cartStatus} added`} colorText={colors.black} />
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