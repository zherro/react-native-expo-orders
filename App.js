import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import screens from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
        <StatusBar animated={true} />
        <NavigationContainer >
          <StatusBar />
          <Stack.Navigator>

            {
              screens.map((screen, idx) => 
                  <Stack.Screen
                    key={idx}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                  />
              )
            }

          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
