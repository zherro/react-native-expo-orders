import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import ProductView from "./product";

export default function Product( { navigation } ) {

    const [data, setData] = useState(null);
    
    const loadData = () => {
        fetch(
            'http://localhost:8080/products', { method: 'GET' }
        )
        .then( ( res ) => { return res.json() } )
        .then( data => {
            console.table(data);
            setData(data);
        })
    }

    useEffect(() => {
        console.error('o data mudou!')
    }, [data])

    useEffect(() => {
        loadData();
    }, [])

    return <ProductView
                navigation={navigation}
                data={data} />; 
}