import * as React from "react";
import { View } from "react-native-web";

import HeaderWithSearch from "../components/header/header-with-search";
import CardPrice from "../components/card/card-price";
import { flex, metrics } from "../components/theme/theme";

import dataMock from "../mock/productDataMock"
import { TouchableOpacity } from "react-native";

export default function Product( { navigation } ) {

    const gotToDetail = ( item ) => {
        navigation.navigate('ProductDetail', {product: item});
    }

    return (
        <View>
            <HeaderWithSearch />
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