import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import ChatsScreen from '../screens/ChatsScreen';
import SeekScreen from '../screens/SeekScreen';

import SplashScreen from '../screens/Splash';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" shifting barStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen
                name="Home"
                component={SplashScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        return (
                            <MaterialCommunityIcons
                                name={focused ? 'home' : 'home-outline'}
                                color={color}
                                size={25}
                            />
                        );
                    },
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
            <Tab.Screen
                name="Seek"
                component={SeekScreen}
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
                name="Chats"
                component={ChatsScreen}
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
        </Tab.Navigator>
    );
};

export default BottomTabs;
