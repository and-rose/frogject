import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import merge from "deepmerge";
import { MD3LightTheme as PaperDefaultTheme } from "react-native-paper";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);

const LeaperTheme = {
    ...CombinedDefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
        ...CombinedDefaultTheme.colors,
        primary: "#295F4E",
        primaryContainer: "#295F4E",
        secondary: "#6DB193",
        secondaryContainer: "#6DB193",
        tertiary: "#F1E1A6",
        tertiaryContainer: "#F1E1A6",
        quaternary: "#F4BBBB",
    },
};

export default LeaperTheme;
