import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { ChatListScreen } from '../screens/ChatListScreen';
import HomeScreen from '../screens/HomeScreen';
import SeekScreen from '../screens/SeekScreen';
import SplashScreen from '../screens/Splash';

export type HomeStackParams = {
    Home: undefined;
    Profile: undefined;
    Swipe: undefined;
    Messaging: undefined;
    RewardsStore: undefined;
};

const Tab = createMaterialBottomTabNavigator<HomeStackParams>();

export const BottomTabs = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting
            sceneAnimationEnabled
            sceneAnimationType="shifting"
            safeAreaInsets={{ top: 0, bottom: 0 }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
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
                name="Swipe"
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
                name="Messaging"
                component={ChatListScreen}
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
