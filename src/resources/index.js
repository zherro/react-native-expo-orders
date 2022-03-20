import React from "react";
import { View } from "react-native";
import BtnOpacity from "../../components/button/btn-opacity";
import { colors, metrics } from "../../components/theme/theme-style";

export default function Resources( { navigation } ) {

    return (
        <View
            style={[
                {flex:1},
                {alignItems: "center"},
                {justifyContent: "space-around"},
            ]}
        >
            <View
                style={[
                    metrics.marginVertical
                ]}
            >
                <BtnOpacity
                    sTitle={'Use Camera'}
                    color={colors.default}
                    nWidth={120}
                    centerText={true}
                    action={() => navigation.navigate('CameraResource') }
                />
            </View>
            <View
                style={[
                    metrics.marginVertical
                ]}
            >
                <BtnOpacity
                    sTitle={'Use GPS'}
                    color={colors.default}
                    nWidth={120}
                    centerText={true}
                />
            </View>
        </View>
    );
}