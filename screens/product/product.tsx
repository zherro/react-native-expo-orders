import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import HeaderWithSearch from "../../components/header/header-with-search";
import CardPrice from "../../components/card/card-price";
import flex, { metrics } from "../../components/theme/theme-style";
import { initDB } from "../../src/database/database-connection";

export default function ProductView({
    navigation,
    data,
    searchAction,
    reloadData,
    error
}) {

    const [clearSearch, setClearSearch] = useState(false);

    const gotToDetail = (item) => {
        navigation.navigate('ProductDetail', { product: item });
    }

    const clearAction = () => {
        reloadData();
        setClearSearch(true);
    }

    const btnHeader = [
        {
            title: "Sort By",
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

    useEffect(() => {
        initDB();
    }, [])

    const ErrorText = () => {
        return error ? <View><Text>{error}</Text></View> : null
    }

    return (
        <View>
            <HeaderWithSearch
                searchAction={searchAction}
                title={'Products'}
                clear={clearSearch}
                clearControl={setClearSearch}
                buttons={btnHeader}
            />
            <View style={[
                metrics.padding,
                flex.row,
                flex.wrap,
                flex.justifyAround,
            ]} >

                {
                   ErrorText()  
                }

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