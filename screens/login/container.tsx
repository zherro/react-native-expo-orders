import React from "react";
import LoginView from "./presentation";

export default function Login( { navigation } ) {

    const submitForm = ( values ) =>  {
        console.table(values);

        login(values);
    }

    const login = (values) => {
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'token': 'klkahsdkladklakldhasdasd',
                'teste': 'klkahsdkladklakldhasdasd',
            },
            body: JSON.stringify({
                email: values.user,
                password: values.password
            })
          }).then( response => response.status == 200 && navigation.navigate('Product'));
    }

    return (
        <LoginView submitAction={submitForm} />
    );
}