import { Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import LeaperTheme from "./src/constants/theme";
import Navigation from "./src/navigation/Navigation";

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
