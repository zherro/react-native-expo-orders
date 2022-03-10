import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { color, colors, flex, metrics } from '../theme/theme';

export default function CardPrice ({ item, options }) {
    return (
        <View
            style={[
                metrics().marginVertical,
                {width: options?.width ? options?.width : 200 },
                styles.card
            ]}
        >
            <View style={metrics().padding}>
                <Text
                    style={[
                        color().black,
                    ]}
                >{ item?.title }</Text>

                <View
                    style={[
                        flex().row,
                        flex().justifyBetween,
                        metrics().marginTop,
                    ]}
                >
                    <Text style={[
                            item?.available ? color().bgDefault : color().bgDanger,
                            color().white,
                            styles.status
                        ]}>
                        { item?.available ? 'A' : 'U' }
                    </Text>
                    <Text
                        style={[
                            color().default,
                            {fontWeight: "500"}
                        ]}
                    >R$ { item?.price }</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors().gray,
        borderRadius: 10
    },
    status: {
        borderRadius: 50,
        width: 16,
        height: 16,
        textAlign: "center"
    }
});