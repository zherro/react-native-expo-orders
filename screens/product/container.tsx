import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { catchAction, getApi } from "../../src/api";
import ProductView from "./product";

export default function Product( { navigation } ) {

    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const getDataAction = ( res ) => {
        if(res.ok) {
            return res.json();
        } else {
            catchAction(setData, setError);
        }
    }; 

    const processDataAction = data => {
        if(data) {
            setData(data);
            setError(null);
        }
    }

    const loadData = ( route ) => {
        getApi(
            route,
            getDataAction,
            processDataAction,
            catchAction(setData, setError)
        );
    }

    const filterData = (searchText) => {        
        getApi(
            `products?query=${searchText}`,
            getDataAction,
            processDataAction,
            catchAction(setData, setError)
        );
    }

    useEffect(() => {
        loadData('products');
    }, [])

    return <ProductView
                navigation={navigation}
                searchAction={filterData}
                reloadData={() =>  loadData('products')}
                data={data}
                error={error}
            />; 
}