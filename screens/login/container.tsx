import React from "react";
import LoginView from "./presentation";

export default function Login() {

    const submitForm = ( values ) =>  {
        console.table(values)
    }

    return (
        <LoginView submitAction={submitForm} />
    );
}