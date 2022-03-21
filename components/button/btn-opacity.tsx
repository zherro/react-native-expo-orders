import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import flex, { color, colors } from '../theme/theme-style'

export default function BtnOpacity({
    sTitle,
    nWidth,
    icon = '',
    action,
    color=colors.white,
    centerText=false
}) {
    return (
        <TouchableOpacity style={[styles.btn, {borderColor: color}]} onPress={action} >
            <View style={[ flex.row ]}>
                <Text
                    style={[
                        { textAlign: centerText ? "center" : "left" },
                        { color: color },
                        { width: nWidth ? nWidth : 60 }
                    ]}
                >
                    {sTitle}
                </Text>
                {
                    icon ? <Icon name={icon} color="white" /> : null
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        fontSize: 12
    },
});