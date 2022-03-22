import React, { useEffect, useState } from "react";
import { getApi, postApi } from "../../../src/api";
import { clearCart, listCart } from "../../../src/database/order-repository";
import OrderListView from "./presentation";

export default function OrderList( { navigation } ) {

    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const catchAction = () => {
        setData([]);
        setError('Unexpected error to retrive products!');
    };

    const getDataAction = ( res ) => {
        if(res.ok) {
            return res.json();
        } else {
            catchAction();
        }        
    }; 

    const processDataAction = data => {
        if(data) {
            setData(data);
            setError(null);
        }
    }
    
    const loadData = () => {
        getApi(
            'orders',
            getDataAction,
            processDataAction,
            catchAction
        );
    }

    useEffect(() => {
        loadData();
    }, [])

    const reloadData = () => {
        listCart(setData);
    }

    useEffect(() => {
        reloadData();
    },[]);

    return <OrderListView
        reloadData={reloadData}
        data={data}
        error={error}
    />;
}