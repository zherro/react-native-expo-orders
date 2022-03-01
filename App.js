import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Product from './screens/product';
import ProductDetail from './screens/productDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
