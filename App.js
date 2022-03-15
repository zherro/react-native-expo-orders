import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Product from './screens/product';
import ProductDetail from './screens/productDetail';
import { colors } from './components/theme/theme-style';

import Login from './screens/login/container';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClientForm from './screens/client/form';
import SuccessView from './screens/message/message';
import ClientList from './screens/client/list';
import ClientDetail from './screens/client/detail';
import Order from './screens/orders/orders';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>

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
            name="ClientList"
            component={ClientList}
            options={{ headerShown: false }}
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
            name="Product"
            component={Product}
            options={{ headerShown: false }}
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
            name="SuccessView"
            component={SuccessView}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
