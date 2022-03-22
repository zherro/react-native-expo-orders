import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export default function CartView( { goToCart, goToOrder } ) {
    return (
        <View
            style={{ flex: 1, alignItems: "center" }}
        >
            <Button
                title="Cart"
                icon={{
                    name: 'cart-plus',
                    type: 'font-awesome',
                    size: 23,
                    color: 'white',
                }}
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
               
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 15,
                }}
                onPress={goToCart}
            />
            <Button
                title="Orders"
                icon={{
                    name: 'tag',
                    type: 'font-awesome',
                    size: 23,
                    color: 'white',
                }}
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
               
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                    marginHorizontal: 50,
                    height: 50,
                    width: 200,
                    marginVertical: 15,
                }}
                onPress={goToOrder}
            />
        </View>
    );
}