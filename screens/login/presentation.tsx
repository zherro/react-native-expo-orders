import { Formik } from "formik";
import React, { useRef } from "react";
import { View, StyleSheet, VirtualizedList } from "react-native";
import BtnSubmit from "../../components/form/btn-submit";
import InputText from "../../components/form/input-text";
import MessageValidation from "../../components/message/message-validation";
import TextCenter from "../../components/text/text-center";
import flex, { color } from "../../components/theme/theme-style";

import FormSchema from './form-validation';
import styles from "./login.style"

const Form = ({
    submitAction,
    FormSchema,
    fields
}) => { 
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

                <TextCenter text="Welcome to Orders" />
                <TextCenter text="Login to your account" fontSize={16} />
                
                <View
                    style={[
                        styles.marginTopLogin
                    ]}
                >
                    <Formik
                        initialValues={{
                            user: 'eve.holt@reqres.in',
                            password: 'cityslicka',
                        }}
                        onSubmit={ ( values ) => submitAction(values) }
                        validationSchema={FormSchema}
                    >
                        { fields }
                    </Formik> 
                </View>

            </View>
        </View>
    );
}

const formContent = ({ values,  errors,  handleSubmit, handleChange, handleBlur }) => {
    return (
        <View>
            <InputText
                value={values.user}
                title="User"
                changeAction={handleChange('user')}
                onBlurAction={handleBlur('user')}
            />

            {errors.user &&
                <MessageValidation message={errors.user} />}
            
            <InputText
                value={values.password}
                title="Password"                            
                changeAction={handleChange('password')}
                onBlurAction={handleBlur('password')}
                isPassword={true}
            />

            {errors.password &&
                <MessageValidation message={errors.password} />}

            <BtnSubmit onPressAction={handleSubmit}  title="Login"/>
        </View>
    );
}

export default function LoginView({
    submitAction
}) {

    const user = useRef(null);
    const password = useRef(null);

    return <Form
                submitAction={submitAction}
                FormSchema={FormSchema}
                fields={formContent}
            />
    
}

