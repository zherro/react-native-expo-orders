import * as React from 'react';
import { StyleSheet } from "react-native";

export function colors() {
    return {
        white: "#FAFAFA",
        gray: "#DDD",
    };
}

export function color() {
    return StyleSheet.create({
        white: { color: "#FAFAFA", }, 
        default: { color: "#33907C", },
        black: { color: "#777777", }, 
        gray: { color: "#DDD", },

        bgWhite: { backgroundColor: "#FAFAFA", }, 
        bgDefault: { backgroundColor: "#33907C", },
        bgBlack: { backgroundColor: "#777777", }, 
        bgGray: { backgroundColor: "#DDD", },
    });
}

export function metrics() {
    let space = '15px';

    return StyleSheet.create({
        marginVertical : {
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
        } ,
        col6: {
            width: '50%',
        }      
    })
}

export function flex() {
    return StyleSheet.create({
        row: {
            flexDirection: "row"
        },
        justifyBetween: {
            justifyContent: 'space-between',
        },
        justifyAround: {
            justifyContent: 'space-around',
        },
        wrap: {
            flexWrap: 'wrap'
        }
    });
}

export function text() {
    return StyleSheet.create({
        alignEnd: {
            textAlign: 'right',
        },
    });
}