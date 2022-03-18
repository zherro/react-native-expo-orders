import React, { useEffect, useState } from "react";
import { postApi } from "../../../src/api";
import { listCart } from "../../../src/database/order-repository";
import CarrListView from "./presentation";

export default function CartList() {

    const [data, setData] = useState([]);

    const submitOrder = () => {
        postApi(
            '/orders/submit',
            data,
            () => {},
            () => {}
        )
    }

    useEffect(() => {
        listCart(setData)
    },[]);

    return <CarrListView data={data} submitOrder={submitOrder} />;
}