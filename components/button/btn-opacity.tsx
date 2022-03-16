import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

import flex, { color, colors } from '../theme/theme-style'

export default function BtnOpacity({
    sTitle,
    nWidth,
    icon = '',
    action
}) {
    return (
        <TouchableOpacity style={[styles.btn]} onPress={action} >
            <View style={[ flex.row ]}>
                <Text
                    style={[
                        color.textWhite,
                        { width: nWidth ? nWidth : 60 }
                    ]}
                >
                    {sTitle}
                </Text>
                {
                    icon &&
                    <Icon name={icon} color="white" />
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        fontSize: 12
    },
});