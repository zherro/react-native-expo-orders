import { Formik } from "formik";
import React from "react";
import { View  } from "react-native";
import BtnSubmit from "../../../components/form/btn-submit";
import InputText from "../../../components/form/input-text";
import MessageValidation from "../../../components/message/message-validation";
import TextCenter from "../../../components/text/text-center";
import flex, { color, colors } from "../../../components/theme/theme-style";

import FormSchema from './form-validation';
import styles from "./client.style"

const Form = ({
    submitAction,
    FormSchema = null,
    fields,
    error
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
                {
                    error?.msg &&
                    <TextCenter text={error.msg} fontSize={18} colorText={colors.black} />
                }

                <View
                    style={[
                        styles.marginTopLogin
                    ]}
                >
                    <Formik
                        initialValues={{
                            email: "",
                            name: "",
                            phone: ""
                        }}
                        onSubmit={(values) => submitAction(values)}
                        validationSchema={FormSchema}
                    >
                        {fields}
                    </Formik>
                </View>

            </View>
        </View>
    );
}

const formContent = ({ values, errors, handleSubmit, handleChange, handleBlur }) => {
    return (
        <View>
            <InputText
                value={values.email}
                title="Email"
                changeAction={handleChange('email')}
                onBlurAction={handleBlur('email')}
            />
            {errors.email &&
                <MessageValidation message={errors.email} />}

            <InputText
                value={values.name}
                title="Name"
                changeAction={handleChange('name')}
                onBlurAction={handleBlur('name')}
            />
            {errors.name &&
                <MessageValidation message={errors.name} />}

            <InputText
                value={values.phone}
                title="Phone"
                changeAction={handleChange('phone')}
                onBlurAction={handleBlur('phone')}
            />
            {errors.phone &&
                <MessageValidation message={errors.phone} />}

            <BtnSubmit onPressAction={handleSubmit} title="Submit" />
        </View>
    );
}

export default function ClientFormView({
    submitAction,
    error
}) {
    return <Form
        submitAction={submitAction}
        FormSchema={FormSchema}
        fields={formContent}
        error={error}
    />

}