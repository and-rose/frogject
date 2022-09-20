import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { ChatScreen } from '../screens/ChatScreen';
import LiveReactScreen from '../screens/LiveReactScreen';

export type HomeStackParams = {
    Chat: undefined;
    LiveReact: undefined;
};

const Tab = createMaterialTopTabNavigator<HomeStackParams>();

export const ChatTopTabs = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} i />
            <Tab.Screen
                name="LiveReact"
                component={LiveReactScreen}
                options={{
                    tabBarLabel: 'Live React',
                }}
            />
        </Tab.Navigator>
    );
};

export default ChatTopTabs;
