import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Platform } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import uuundulateShape from '../../constants/svgShapes';

export default function SplashScreen() {
    const theme = useTheme();

    return (
        <View
            style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
            {Platform.OS !== 'web' && (
                <SvgXml
                    xml={uuundulateShape}
                    style={{ position: 'absolute', top: 0, opacity: 0.2 }}
                />
            )}
            <View
                style={{
                    padding: 15,
                    borderRadius: 50,
                }}>
                <Text
                    style={{
                        color: theme.colors.secondary,
                        textTransform: 'uppercase',
                        fontFamily: 'JosefinSans_400Regular',
                        letterSpacing: 1.5,
                        opacity: 0.2,
                    }}
                    variant="headlineLarge">
                    RE:GROUP
                    <MaterialCommunityIcons
                        name="debug-step-over"
                        size={35}
                        color={theme.colors.secondary}
                    />
                </Text>
            </View>
        </View>
    );
}
