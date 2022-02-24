import react from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";



export default function Product() {
    return (
        <View>
            <HeaderWithSearch />
        </View>
    );
}

const HeaderWithSearch = () => {
    return (<>
        <View style={styles.container}>

            <View style={styles.row}>
                <Text style={styles.title}>Product</Text>
                <Text style={[styles.title, styles.titleEnd]}>X</Text>
            </View>
            
            <View>
                <TextInput style={styles.inputSearch} value={'Search'} />
            </View>
            
            <View style={ [styles.row, styles.defaultMargingY]}>
                
                <TouchableOpacity style={[ styles.btn, styles.marginEnd]}>
                        <Text style={styles.whiteColor}>Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                        <Text style={styles.whiteColor}>Category</Text>
                </TouchableOpacity>

            </View>
        </View>
    </>);
}


const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#33907C',
            padding: '15px',
        },
        row: {
            flexDirection: "row"
        },

        inputSearch: {
            backgroundColor: '#FAFAFA',
            borderRadius: 17,
            fontSize: '1em',
            padding: '8px',
            marginTop: 15,
            borderStyle: 'none'
        },

        title: {
            color: '#FAFAFA',
            fontSize: '1.35em',
            fontWeight: '500',
            width: '50%',
            alignSelf: 'flex-end'
        },

        titleEnd: {
            textAlign: 'right',
        },

        btn: {
            borderColor: '#FAFAFA',
            borderStyle: 'solid',
            borderWidth: '1px',
            padding: '4px',
            paddingHorizontal: '8px',
            borderRadius: 15,
            fontSize: '0.75em'
            
        },

        whiteColor: {
            color: '#FAFAFA'
        },
        defaultMargingY : {
            marginVertical: '15px'
        },
        marginEnd: {
            marginEnd: '15px'
        }
        
    }
);