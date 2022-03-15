import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { getApi } from "../../api";
import ProductView from "./product";

const productURI = 'http://localhost:8080/products';

export default function Product( { navigation } ) {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const catchAction = () => setError('Unexpected error to retrieve products!');
    const getDataAction = ( res ) => {
        if(res.ok) {
            return res.json()
        } else {
            catchAction();
            setData([]);
        }
    };
    const processDataAction = data => {
        if(data) {
            setData(data);
            setError(null);
        }
    };
    
    const loadData = () => {
        getApi(
            productURI,
            getDataAction,
            processDataAction,
            catchAction
        )
    }    
    
    const filter = (searchText) => {        
        getApi(
            productURI + `?query=${searchText}`,
            getDataAction,
            processDataAction,
            catchAction
        )
    }

    const searchAction = ( search ) => {
        filter(search);
    }

    useEffect(() => {
        loadData();
    }, [])

    return <ProductView
                navigation={navigation}
                searchAction={searchAction}
                reloadData={() => loadData()}
                data={data}
                error={error} />; 
}