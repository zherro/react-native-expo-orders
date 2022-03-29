import { useState } from "react";
import ClientFormView from "./presentation-form";

export default function ClientForm( { navigation } ) {

    const [error, setError] = useState({})

    const createUser = (values) => {

        console.table(values);

        fetch(
            'http://localhost:8080/clients/create',
            {
                method: 'POST',                
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }
        )
        .then(response => {
            if(response.ok) {
                navigation.push('SuccessView', {msg: 'Client created'})
            } else {
                setError({
                    code: response.status,
                    msg: 'Unexpected error, when attemp process request!'
                });
            }
        })
    }

    return <ClientFormView
        submitAction={createUser}
        error={error}
    />
}