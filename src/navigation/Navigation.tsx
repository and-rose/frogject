import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { IconButton } from 'react-native-paper';

import LeaperTheme from '../constants/theme';
import IndeterminateSplash from '../screens/IndeterminateSplash';
import Splash from '../screens/Splash';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
    Leaper: undefined;
    CheckIn: undefined;
    Splash: undefined;
    IndeterminateSplash: undefined;
    Settings: undefined;
};

function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen

    return getFocusedRouteNameFromRoute(route) ?? 'Foodspace';
}

export default function Navigation() {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer theme={LeaperTheme}>
            <Stack.Navigator initialRouteName="IndeterminateSplash">
                <Stack.Screen
                    name="Leaper"
                    component={BottomTabs}
                    options={({ route, navigation }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerRight: () => (
                            <IconButton
                                icon="cog"
                                size={20}
                                onPress={() => navigation.navigate('Settings')}
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
                    name="CheckIn"
                    component={Splash}
                    options={{
                        title: 'Check In',
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Splash}
                    options={{
                        title: 'Settings',
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
