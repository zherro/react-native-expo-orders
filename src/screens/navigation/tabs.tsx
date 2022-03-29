import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import { colors } from "../../components/theme/theme-style";
import { tabScreens } from "../../screens";

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
                iconName = 'folder';
            }

            return <Icon type='font-awesome' name={iconName} color={color} size={size} />
        },
        tabBarActiveTintColor: colors.default,
        tabBarInactiveTintColor: 'gray'
    });

    return (
        <Tab.Navigator screenOptions={navigatorOptions} >
            {
                tabScreens().map((screen, idx) =>
                    <Tab.Screen
                        key={idx}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                )
            }
        </Tab.Navigator>
    );
}

export default TabNavigator;