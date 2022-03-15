import * as React from "react";
import { View, TouchableOpacity } from "react-native";

import HeaderWithSearch from "../../components/header/header-with-search";
import CardPrice from "../../components/card/card-price";
import { flex, metrics } from "../../components/theme/theme";

export default function ProductView( { navigation, data } ) {

    const gotToDetail = ( item ) => {
        navigation.navigate('ProductDetail', {product: item});
    }

    const searchAction = ( search ) => {
        console.log( search )
    }

    return (
        <View>
            <HeaderWithSearch searchAction={searchAction} title={'Products'} />
            <View style={[
                metrics().padding,
                flex().row,
                flex().wrap, 
                flex().justifyAround,            
            ]} >
                {
                    data?.map((item, index) => {
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