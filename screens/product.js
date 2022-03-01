import * as React from "react";
import { TouchableOpacity, View } from "react-native";

import HeaderWithSearch from "../components/header/header-with-search";
import CardPrice from "../components/card/card-price";
import { flex, metrics } from "../components/theme/theme";

import dataMock from "../mock/productDataMock"

export default function Product( {navigation} ) {

    const goToDetail = (item) => {
        navigation.navigate('ProductDetail', {item: item});
    };

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
                            onPress={() => goToDetail(item)}
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