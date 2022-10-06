import { JosefinSans_400Regular, useFonts } from '@expo-google-fonts/josefin-sans';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { enGB, registerTranslation } from 'react-native-paper-dates';

registerTranslation('en-GB', enGB);

import LeaperTheme from './src/constants/theme';
import Navigation from './src/navigation/Navigation';

export default function App() {
    const [fontsLoaded] = useFonts({
        JosefinSans_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <PaperProvider theme={LeaperTheme}>
                <Navigation />
            </PaperProvider>
        );
    }
}
