import React, { useRef } from 'react';
import { Formik } from 'formik';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import theme, { colors } from '../components/theme/theme-style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
    const user = useRef(null);
    const password = useRef(null);

    const FormSchema = Yup.object().shape({
        user: Yup.string().required('Required'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Min length 8 characters'),
    });

    const Form = () => {
        return (
            <Formik
                initialValues={{
                    user: '',
                    password: '',
                }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={FormSchema}>
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    setFieldTouched,
                }) => (
                    <View>
                        <Text
                            style={[
                                theme.textWhite,
                            ]}
                        >User</Text>
                        <TextInput
                            style={[
                                styles.input
                            ]}
                            ref={user}
                            value={values.user}
                            onChangeText={handleChange('user')}
                            onBlur={() => setFieldTouched('user', true)}
                        />
                        {errors.user && touched.user && <Text 
                                style={[ styles.message ]}
                            >{errors.user}</Text>}
                        <Text
                            style={[
                                theme.textWhite,
                            ]}
                        >Password</Text>
                        <TextInput
                            style={[
                                styles.input
                            ]}
                            ref={password}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password', true)}
                        />
                        {errors.password && touched.password && (
                            <Text
                                style={[ styles.message ]}
                            >{errors.password}</Text>
                        )}
                        <TouchableOpacity 
                         style={[
                            styles.input
                        ]}
                        onPress={() => {
                            handleChange('password');
                            handleSubmit();
                        }} >
                            <Text
                                style={[
                                    theme.textCenter,
                                    theme.textWhite,
                                ]}
                            >Entar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        );
    }

    return (
        <View
            style={[
                styles.loginPage,
                theme.bgDefault,
                theme.contentCenter
            ]}
        >
            <View style={[
                {minWidth: 220},
                {maxWidth: 230},
                {width: '80%'}
            ]}>
                <Text style={[
                    theme.textWhite,
                    theme.textCenter,
                    {fontSize: 18},
                    styles.marginTopLogin,
                ]}>
                    Welcome to Shop Orders!
                </Text>
                <Text style={[
                    theme.textWhite,
                    theme.textCenter,                    
                    {fontSize: 16},
                    styles.marginTopLogin,
                ]}>
                    Login to your account
                </Text>
                <View
                    style={[
                        styles.marginTopLogin,
                    ]}
                >
                    <Form />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginPage: {
        flex: 1,
        padding: 15,
        flexDirection: 'column',
        width: '100%',
        minWidth: 290,
    },
    marginTopLogin: {
        marginTop: 40
    },
    input: {
        borderColor: '#fafafa',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        padding: 8,
        fontSize: 14,
        color: '#fafafa',
        marginVertical: 8,
        marginBottom: 15
    },
    message: {
        color: colors.white,
        paddingBottom: 15,
        fontWeight: 'bold'
    }
});
