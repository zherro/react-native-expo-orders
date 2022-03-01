import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { View } from 'react-native-web';
import { colors, flex } from '../components/theme/theme';
import theme from '../components/theme/theme-style';


export default function ProductDetail({ route, navigation }) {

    /* 2. Get the param */
    const { item } = route.params;

    React.useEffect(() => {
        navigation.setOptions({
          title: item.title,
        });
      }, [item]);

    return (
        <View style={[
            theme.column,
        ]}>
            <View style={[
                styles.card,
                theme.padding,                
                theme.marginVertical,
            ]}>
                <View
                    style={[
                        theme.row,
                        theme.justifyBetween,
                        theme.marginTop,
                    ]}
                >
                    <Text style={[
                        item?.available ? theme.bgDefault : theme.bgDanger,
                        theme.white,
                        styles.status
                    ]}>
                        {item?.available ? 'A' : 'U'}
                    </Text>
                    <Text
                        style={[
                            theme.default,
                            { fontWeight: "500" }
                        ]}
                    >R$ {item?.price}</Text>
                </View>
            </View>
            
            <View style={[
                theme.padding,                
                theme.marginVertical,
                theme.col12,
                theme.row,
                theme.justifyCenter,
            ]}>
                <TouchableOpacity>
                    <Text
                        style={[
                            styles.btnAdd,
                            theme.bgDefault,
                            theme.textWhite,
                            theme.textCenter,
                            theme.padding,
                        ]}
                    >
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    btnAdd: {
        minWidth: 180,
        fontSize: 18,

    },
    card: {
        height: 80,
        width: '100%',
        backgroundColor: "#dedede",
    },
    status: {
        borderRadius: 50 ,
        width: "1.25em",
        height: "1.25em",
        textAlign: "center"
    }
});