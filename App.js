import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Product from './screens/product';
import ProductDetail from './screens/productDetail';

import { colors } from './components/theme/theme';
import Login from './screens/login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ 
            headerShown: true,
            headerStyle: {
              backgroundColor: colors().default,
            },
            headerTintColor: colors().white,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },            
          }}
        />
     

      </Stack.Navigator>
    </NavigationContainer>
  );
}
