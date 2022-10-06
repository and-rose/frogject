import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ProgressBar, Text, useTheme } from 'react-native-paper';

const IndeterminateSplash = (props: { navigation: any }) => {
    const [appIsReady, setAppIsReady] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setAppIsReady(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (appIsReady) {
            props.navigation.replace('Login');
        }
    }, [appIsReady, props.navigation]);

    return (
        <View
            style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
            <Text
                style={{
                    color: theme.colors.primary,
                    textTransform: 'uppercase',
                    fontFamily: 'JosefinSans_400Regular',
                    letterSpacing: 1.5,
                }}
                variant={'headlineLarge'}>
                RE:GROUP
                <MaterialCommunityIcons
                    name="debug-step-over"
                    size={35}
                    color={theme.colors.primary}
                />
            </Text>
            <ProgressBar indeterminate style={{ width: 250 }} color={theme.colors.primary} />
        </View>
    );
};

export default IndeterminateSplash;
