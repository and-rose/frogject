import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'react-native-paper';

import { ChatScreen } from '../screens/ChatScreen';
import LiveReactScreen from '../screens/LiveReactScreen';
import { RootStackParamList } from './Navigation';

export type HomeStackParams = {
    Chat: undefined;
    LiveReact: { name: string };
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Tab = createMaterialTopTabNavigator<HomeStackParams>();

export const ChatTopTabs = ({ navigation, route }: Props) => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Chat"
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'JosefinSans_400Regular',
                    textTransform: 'uppercase',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: theme.colors.primary,
                },
                tabBarStyle: {
                    backgroundColor: theme.colors.backgroundVariant,
                },
                swipeEnabled: false,
            }}>
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen
                name="LiveReact"
                component={LiveReactScreen}
                initialParams={{ name: route.params?.name }}
                options={{
                    tabBarLabel: 'Live React',
                }}
            />
        </Tab.Navigator>
    );
};

export default ChatTopTabs;
