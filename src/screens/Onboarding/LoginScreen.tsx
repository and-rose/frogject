import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import { RootStackParamList } from '../../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function LoginScreen({ navigation }: Props) {
    const theme = useTheme();

    return (
        <View
            style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: theme.colors.backgroundVariant,
            }}>
            {/* {Platform.OS !== 'web' && (
                <SvgXml
                    xml={uuundulateShape}
                    style={{ position: 'absolute', top: 0, opacity: 0.2 }}
                />
            )} */}
            <Image
                source={require('../../../assets/regroup-logo-final.png')}
                style={{ height: 100, resizeMode: 'contain' }}
            />
            <View style={{ width: 320 }}>
                <Button
                    mode="contained"
                    onPress={() => navigation.replace('REGROUP', { screen: 'Home' })}
                    style={{ marginTop: 20 }}
                    uppercase
                    contentStyle={{ paddingVertical: 10 }}
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: 'JosefinSans_400Regular',
                    }}>
                    Log In
                </Button>
                <Button
                    mode="contained"
                    buttonColor={theme.colors.secondary}
                    onPress={() => navigation.navigate('RegistrationDetails')}
                    style={{ marginTop: 20 }}
                    uppercase
                    contentStyle={{ paddingVertical: 10 }}
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: 'JosefinSans_400Regular',
                    }}>
                    Sign Up
                </Button>
            </View>
        </View>
    );
}
