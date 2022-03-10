import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import flex, { color, metrics, text } from "../components/theme/theme-style";

export default function ProductDetail( { navigation, route } ) {

    const { product } = route.params;

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
            <View
                style={[
                    metrics.padding,
                    metrics.marginVertical,                    
                    flex.row,
                    flex.justifyCenter,
                ]}
            >
                <TouchableOpacity>
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