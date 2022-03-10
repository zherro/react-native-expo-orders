import * as React from "react";
import { View, TouchableOpacity } from "react-native";

import HeaderWithSearch from "../components/header/header-with-search";
import CardPrice from "../components/card/card-price";
import { flex, metrics } from "../components/theme/theme";

import dataMock from "../mock/productDataMock";

export default function Product( { navigation } ) {

    const gotToDetail = ( item ) => {
        navigation.navigate('ProductDetail', {product: item});
    }

    const searchAction = ( search ) => {
        console.log( search )
    }

    return (
        <View>
            <HeaderWithSearch searchAction={searchAction} />
            <View style={[
                metrics().padding,
                flex().row,
                flex().wrap, 
                flex().justifyAround,            
            ]} >
                {
                    dataMock.map((item, index) => {
                        return <TouchableOpacity
                            key={index}
                            onPress={() => gotToDetail(item)}
                        >
                            <CardPrice
                                item={item}
                                options={{
                                    width: 180,
                                    maxWidth: 180
                                }}
                            />
                        </TouchableOpacity>
                    })
                }
            </View>
        </View>
    );
}