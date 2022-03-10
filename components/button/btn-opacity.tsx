import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { color, colors } from '../theme/theme'

export default function BtnOpacity({ sTitle, nWidth }) {
    return (
        <TouchableOpacity style={[ styles.btn ]}>
            <Text
                style={[
                    color().white,
                    { width: nWidth ? nWidth : 60 }
                ]}
            >
                { sTitle }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        borderColor: colors().white ,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 4,
        paddingHorizontal: 8,
        borderRadius: 15,
        fontSize: 12
    },
});