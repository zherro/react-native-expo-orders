import React, { useEffect, useState } from "react";
import { addToCart, countCartItem } from "../../database/order-repository";
import ProductDetailView from "./presentation";

export default function ProductDetail({ navigation, route }) {

    const { product } = route.params;

    const [submited, setSubmited] = useState(false);
    const [error, setError] = useState(null);
    const [added, addCallback] = useState({ state: false, qtd: null });

    const addProductToCart = () => {
        setSubmited(true);
        addToCart(product, addCallback);
    }

    useEffect(() => {
        if (added?.state) {
            setSubmited(false);
            setError(null);
            console.log('count item retrieve:' + added?.qtd)
        } else {
            setError('Unexpected result when attempt add item to cart! Sorry!!!');
        }
    }, [added]);

    useEffect(() => {
        countCartItem(product.id, addCallback);
        navigation.setOptions({ title: product.title });
    }, [product]);

    return <ProductDetailView
        product={product}
        added={added}
        addProductToCart={addProductToCart}
        submited={submited}
    />;
}
