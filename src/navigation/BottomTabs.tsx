import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import SplashScreen from '../screens/Splash';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" shifting barStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen
                name="Recruit"
                component={SplashScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'account-search' : 'account-search-outline'}
                                color={color}
                                size={25}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Games"
                component={SplashScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'gamepad-variant' : 'gamepad-variant-outline'}
                                color={color}
                                size={25}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Messages"
                component={SplashScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'chat' : 'chat-outline'}
                                color={color}
                                size={25}
                            />
                        );
                    },
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SplashScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'account-circle' : 'account-circle-outline'}
                                color={color}
                                size={25}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
