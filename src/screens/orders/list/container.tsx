import React, { useEffect, useState } from "react";
import { postApi } from "../../../api";
import { clearCart, listCart } from "../../../database/order-repository";
import CarrListView from "./presentation";

export default function CartList( { navigation } ) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [submited, setSubmited] = useState(false);

    const catchAction = () => {
        setSubmited(false);
        setError("ERROR: oh no! order not submited!")
    }

    const getDataAction = async ( res ) => {
        setSubmited(false);
        if(res.ok) {
            await processDataAction( await res.json());
        } else {
            catchAction();
        }        
    };

    const actionMessage = () => navigation.push('TabNavigator');

    const processDataAction = data => {

        if(data) {
            setError(null);

            console.log(data)
            let message = {
                title: 'Order submited!',
                msg: `Created order with id: ${data?.id}`,
                btnTitle: 'GO TO HOME',
                type: 'success',
                action: actionMessage
            };

            clearCart((data) => {} );
            navigation.push('MessageView', {props: message} );
        }
    }

    const submitOrder = () => {
        if(data?.length > 0) {
            setSubmited(true);
            postApi(
                '/orders/submit',
                data,
                getDataAction,
                catchAction
            );
        }
    }

    const reloadData = () => {
        listCart(setData);
    }

    useEffect(() => {
        reloadData();
    },[]);

    return <CarrListView
        reloadData={reloadData}
        data={data}
        submitOrder={submitOrder}
        error={error}
        submited={submited}
    />;
}