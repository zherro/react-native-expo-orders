import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";

import HeaderWithSearch from "../../components/header/header-with-search";
import CardPrice from "../../components/card/card-price";
import flex, { metrics, color } from "../../components/theme/theme-style";

export default function ProductView({ navigation, data, reloadData, searchAction, error }) {

    
    const [clearSearch, setClearSearch] = useState(false);

    const gotToDetail = (item) => {
        navigation.navigate('ProductDetail', { product: item });
    }

    const clearAction = () => {        
        reloadData();
        setClearSearch(true);
    }
    
    const btnHeaders = [
        {
            title: "Short By",
            size: 80,
            icon: "sort",
            action: () => { }
        },
        {
            title: "Clear Search",
            size: 80,
            icon: "clear",
            action: () => clearAction(),
        }
    ];

    return (
        <View>
            <HeaderWithSearch
                searchAction={searchAction}
                title={'Products'}
                buttons={btnHeaders}
                clear={clearSearch}
                clearControl={setClearSearch}                
            />
            <View style={[
                metrics.padding,
                flex.row,
                flex.wrap,
                flex.justifyAround,
            ]} >
                {
                    error &&
                    <Text style={color.textBlack}>{error}</Text>
                    ||
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