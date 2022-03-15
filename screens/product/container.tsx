import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import ProductView from "./product";

export default function Product( { navigation } ) {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    
    const loadData = () => {
        fetch(
            'http://localhost:8080/products', { method: 'GET' }
        )
        .then( ( res ) => {
            if(res.ok) {
                return res.json()
            } else {
                setError('Unexpected error to retrieve products!');
                setData([]);
            }
        } )
        .then( data => {
            if(data) {
                setData(data);
                setError(null);
            }
        })
        .catch(() => setError('Unexpected error to retrieve products!'))
    }    
    
    const filter = (searchText) => {
        fetch(
            `http://localhost:8080/products?query=${searchText}`, { method: 'GET' }
        )
        .then( ( res ) => {
            if(res.ok) {
                return res.json()
            } else {
                setError('Unexpected error to retrieve products!');
                setData([]);
            }
        } )
        .then( data => {
            if(data) {
                setData(data);
                setError(null);
            }
        })
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