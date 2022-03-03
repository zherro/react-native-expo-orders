import { Formik } from "formik";
import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import flex, { color, colors, text } from "../components/theme/theme-style";

export default function Login() {
    return (
        <View
            style={[
                { flex: 1 },
                color.bgDefault,
                flex.contentCenter,
                styles.loginPage
            ]}
        >
            <View
                style={[
                    { width: '80%' },
                    { minWidth: 220 },
                    { maxWidth: 230 }
                ]}
            >

                <Text
                    style={[
                        color.textWhite,
                        { fontSize: 18 },
                        styles.marginTopLogin,
                        text.alignCenter,
                    ]}
                >
                    Welcome to Orders
                </Text>
                <Text
                    style={[
                        color.textWhite,
                        { fontSize: 16 },
                        styles.marginTopLogin, ,
                        text.alignCenter,
                    ]}
                >
                    Login to your account
                </Text>

                <View
                    style={[
                        styles.marginTopLogin
                    ]}
                >
                    <Formik
                        initialValues={{}}
                        onSubmit={values => { }}
                    >
                        <View>
                            <Text style={[color.textWhite]}>User</Text>
                            <TextInput
                                style={[
                                    styles.input
                                ]}
                            ></TextInput>
                            <Text style={styles.message}>Required field</Text>


                            <Text style={[color.textWhite]}>Password</Text>
                            <TextInput
                                style={[
                                    styles.input
                                ]}
                            ></TextInput>                            
                            <Text style={styles.message}>Required field</Text>

                            <TouchableOpacity
                                style={[
                                    styles.input,
                                    color.bgWhite
                                ]}
                            >
                                <Text style={[color.textDefault, text.alignCenter, { fontSize: 14 }]}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Formik>
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginPage: {
        minWidth: 290,
        width: '100%',

    },
    marginTopLogin: {
        marginTop: 40
    },
    input: {
        borderColor: "#FAFAFA",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 25,
        padding: 8,
        fontSize: 14,
        color: "#fafafa",
        marginVertical: 8,
        marginBottom: 15,
    },
    message: {
        color: colors.white,
        marginBottom: 15,
        fontWeight: 'bold',
    }
});