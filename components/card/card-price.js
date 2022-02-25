import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { color, colors, flex, metrics } from '../theme/theme';

export default function CardPrice ({ item, options }) {
    return (
        <View
            style={[
                metrics().marginVertical,
                {width: options?.width ? options?.width : 200 },
                style.card
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
                    <Text>{ item?.available ? 'A' : 'U' }</Text>
                    <Text
                        style={[
                            color().default,
                            {fontWeight: 500}
                        ]}
                    >R$ { item?.price }</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: colors().gray,
        borderRadius: 10
    }
});