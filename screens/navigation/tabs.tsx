import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import { colors } from "../../components/theme/theme-style";
import Product from "../product";
import Order from "../orders/orders";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Products') {
              iconName = 'list';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
  
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.default,
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Products"
          component={Product}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
    );
  }

  export default TabNavigator;