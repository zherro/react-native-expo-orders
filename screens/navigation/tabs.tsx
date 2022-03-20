import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import { colors } from "../../components/theme/theme-style";
import Product from "../product";
import ClientList from "../client/list";
import OrderList from "../orders/list";
import CartList from "../orders/list";
import Resources from "../../src/resources";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const navigatorOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == 'Product') {
                iconName = focused ? 'list-alt' : 'list';
            }

            if (route.name == 'ClientList') {
                iconName = 'users';
            }
            
            if (route.name == 'CartList') {
                iconName = 'shopping-cart';
            }

            if (route.name == 'Resources') {                
                iconName = 'config';
            }

            return <Icon type='font-awesome' name={iconName} color={color} size={size} />
        },
        tabBarActiveTintColor: colors.default,
        tabBarInactiveTintColor: 'gray'
    });

    return (
        <Tab.Navigator screenOptions={navigatorOptions} >
            <Tab.Screen
                name="Product"
                component={Product}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="CartList"
                component={CartList}
                options={{
                    headerShown: false,
                    title: 'Cart',
                }}
            />
            <Tab.Screen
                name="ClientList"
                component={ClientList}
                options={{
                    headerShown: false,
                    title: 'Client List',
                }}
            />
            <Tab.Screen
                name="Resources"
                component={Resources}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;