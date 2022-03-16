import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import flex, { color, colors, metrics } from '../theme/theme-style';

export default function CardPrice ({ item, options }) {
    return (
        <View
            style={[
                metrics.marginVertical,
                {width: options?.width ? options?.width : 200 },
                styles.card
            ]}
        >
            <View style={metrics.padding}>
                <Text
                    style={[
                        color.textBlack,
                    ]}
                >{ item?.title }</Text>

                <View
                    style={[
                        flex.row,
                        flex.justifyBetween,
                        metrics.marginTop,
                    ]}
                >
                    <Text style={[
                            item?.available ? color.bgDefault : color.bgDanger,
                            color.textWhite,
                            styles.status
                        ]}>
                        { item?.available ? 'A' : 'U' }
                    </Text>
                    <Text
                        style={[
                            color.textDefault,
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
        borderColor: colors.gray,
        borderRadius: 10
    },
    status: {
        borderRadius: 50,
        width: 16,
        height: 16,
        textAlign: "center"
    }
});