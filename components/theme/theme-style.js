import * as React from 'react';
import { StyleSheet } from "react-native";

const space = '15px';

export const colors = {
    white: "#FAFAFA",
    gray: "#DDD",
    default: "#33907C",    
    danger: "#FF6F91",
}

const theme = StyleSheet.create({

    textWhite: { color: "#FAFAFA", },
    textDefault: { color: "#33907C", },
    textBlack: { color: "#777777", },
    textGray: { color: "#DDD", },

    bgWhite: { backgroundColor: "#FAFAFA", },
    bgDefault: { backgroundColor: "#33907C", },
    bgBlack: { backgroundColor: "#777777", },
    bgGray: { backgroundColor: "#DDD", },
    bgDanger: { backgroundColor: "#FF6F91" },

    textCenter: { textAlign: 'center' },

    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column"
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    contentCenter: {
        alignItems: 'center',
    },
    wrap: {
        flexWrap: 'wrap'
    },
    alignEnd: {
        textAlign: 'right',
    },

    marginVertical: {
        marginVertical: space,
    },
    marginEnd: {
        marginEnd: space,
    },
    marginTop: {
        marginTop: space,
    },
    padding: {
        padding: space,
    },
    col6: {
        width: '50%',
    },
    col12: {
        width: '100%',
    }
});

export default theme;