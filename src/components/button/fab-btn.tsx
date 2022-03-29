import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-elements";

export default function FabButton({ action }) {
    return (
        <FAB
            style={style.fab}
            visible={true}
            onPress={() => action()}
            placement="right"
            title="Add"
            icon={{ name: 'add', color: 'white' }}
            color="green"
        />
    );
}

const style = StyleSheet.create({
    fab: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
    }
})