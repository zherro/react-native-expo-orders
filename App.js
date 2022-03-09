import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Product from './screens/product';
import ProductDetail from './screens/productDetail';
import { colors } from './components/theme/theme-style';
import Login from './screens/login';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
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
                backgroundColor: colors.default
              },
              headerTintColor: colors.white,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />



        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
