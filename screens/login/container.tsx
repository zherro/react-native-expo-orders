import React from "react";
import LoginView from "./presentation";

export default function Login() {

    const submitForm = ( values ) =>  {
        console.table(values);

        login(values);
    }

    const login = (values) => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.user,
                password: values.password
            })
          });
    }

    return (
        <LoginView submitAction={submitForm} />
    );
}