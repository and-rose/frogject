import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { IconButton } from 'react-native-paper';
import { ChatMoreMenu } from '../components/ChatReportMenu';
import LeaperTheme from '../constants/theme';

import { ChatScreen } from '../screens/ChatScreen';
import DebugScreen from '../screens/DebugScreen';
import IndeterminateSplash from '../screens/IndeterminateSplash';
import LiveReactScreen from '../screens/LiveReactScreen';
import Splash from '../screens/Splash';
import BottomTabs, { HomeStackParams } from './BottomTabs';
import ChatTopTabs from './ChatTopTabs';

export type RootStackParamList = {
    REGROUP: NavigatorScreenParams<HomeStackParams>;
    CheckIn: undefined;
    Splash: undefined;
    IndeterminateSplash: undefined;
    LiveReact: undefined;
    ChatTopTabs: { name: string };
    Debug: undefined;
};

function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen

    return getFocusedRouteNameFromRoute(route) ?? 'Home';
}

export default function Navigation() {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="IndeterminateSplash"
                screenOptions={{
                    headerTitleStyle: {
                        fontFamily: 'JosefinSans_400Regular',
                        textTransform: 'uppercase',
                    },
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                }}>
                <Stack.Screen
                    name="REGROUP"
                    component={BottomTabs}
                    options={({ route, navigation }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <IconButton
                                icon="bug"
                                size={20}
                                onPress={() => navigation.navigate('Debug')}
                            />
                        ),
                    })}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false,
                        ...TransitionPresets.ScaleFromCenterAndroid,
                    }}
                />
                <Stack.Screen
                    name="IndeterminateSplash"
                    component={IndeterminateSplash}
                    options={{
                        headerShown: false,
                        ...TransitionPresets.ScaleFromCenterAndroid,
                    }}
                />
                <Stack.Screen
                    name="Debug"
                    component={DebugScreen}
                    options={{
                        headerTitleAlign: 'center',
                        title: 'Debug',
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="ChatTopTabs"
                    component={ChatTopTabs}
                    options={({ route, navigation }) => ({
                        headerTitleAlign: 'center',
                        title: route.params.name,
                        headerRight: () => <ChatMoreMenu route={route} navigation={navigation} />,
                        ...TransitionPresets.SlideFromRightIOS,
                    })}
                />
                <Stack.Screen
                    name="LiveReact"
                    component={LiveReactScreen}
                    options={({ route, navigation }) => ({
                        headerTitleAlign: 'center',
                        title: 'Live React',
                        ...TransitionPresets.SlideFromRightIOS,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
