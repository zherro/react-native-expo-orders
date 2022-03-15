import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FAB } from "react-native-elements";

export default function FabButton({ action }) {
    return (
        <View
            style={[
                { height: 50 },
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    bottom: 0,
                }
            ]}
        > <FAB
                visible={true}
                onPress={() => action()}
                placement="right"
                title="Add"
                icon={{ name: 'add', color: 'white' }}
                color="green"
            />
        </View>
    );
}