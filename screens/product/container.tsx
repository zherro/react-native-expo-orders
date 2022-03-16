import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { getApi } from "../../src/api";
import ProductView from "./product";

const productURI = 'http://localhost:8080/products';

export default function Product( { navigation } ) {

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
            productURI,
            getDataAction,
            processDataAction,
            catchAction
        );
    }

    const filterData = (searchText) => {        
        getApi(
            productURI + `?query=${searchText}`,
            getDataAction,
            processDataAction,
            catchAction
        );
    }

    useEffect(() => {
        loadData();
    }, [])

    return <ProductView
                navigation={navigation}
                searchAction={filterData}
                reloadData={() =>  loadData()}
                data={data}
                error={error}
            />; 
}