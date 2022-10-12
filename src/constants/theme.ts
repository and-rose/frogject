import { configureFonts, DefaultTheme } from 'react-native-paper';

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const LeaperTheme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        bottomTabBar: '#3F3F3F',
        primary: '#4F3FF8',
        primaryContainer: '#4F3FF8',
        secondary: '#7C9BF8',
        secondaryContainer: '#7C9BF8',
        tertiary: '#B6C6F3',
        surfaceVariant: '#7C9BF8',
        surface: '#7C9BF8',
        error: '#C52F2F',
        unfocused: '#D9D9D9',
        background: '#FFFFFF',
        backgroundVariant: '#EBEEFF',
        chatBubbleColor: '#D1CDFD',
        chatBubbleColorVariant: '#4F3FF8',
    },
};

export default LeaperTheme;
