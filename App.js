import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetail from './screens/productDetail';
import { colors } from './components/theme/theme-style';

import Login from './screens/login/container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClientForm from './screens/client/form';
import ClientDetail from './screens/client/detail';
import Order from './screens/orders/orders';
import TabNavigator from './screens/navigation/tabs';
import { StatusBar } from 'react-native';
import MessageView from './screens/message/message';
import CartList from './screens/orders/list';
import OrderList from './screens/orders/orders-list';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
        <StatusBar animated={true} />
        <NavigationContainer >
          <StatusBar />
          <Stack.Navigator>

            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Order"
              component={Order}
              options={{
                title: 'Order Detail',
                headerShown: true,
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />

            <Stack.Screen
              name="ClientDetail"
              component={ClientDetail}
              options={{
                title: 'Client Details',
                headerShown: true,
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />

            <Stack.Screen
              name="ClientForm"
              component={ClientForm}
              options={{
                headerShown: true,
                title: "Register Client",
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />

<Stack.Screen
              name="Cart"
              component={CartList}
              options={{
                headerShown: true,
                title: "Cart",
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />
            <Stack.Screen
              name="OrderList"
              component={OrderList}
              options={{
                headerShown: true,
                title: "Orders",
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            />


            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: colors.default
                },
                headerTintColor: colors.white,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}

            />

            <Stack.Screen
              name="MessageView"
              component={MessageView}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
