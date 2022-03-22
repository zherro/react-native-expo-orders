import React from "react";
import CartView from "./presentation";

export default function Cart( { navigation } ) {

    const goToCart = () => {
        navigation.navigate('Cart');
    }

    const goToOrder = () => {
        navigation.navigate('OrderList');
    }

    return <CartView goToCart={goToCart} goToOrder={goToOrder} />
}