import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text style={{ color: "green" }} variant={"headlineLarge"}>
                    Leaper
                    <MaterialCommunityIcons
                        name="debug-step-over"
                        size={35}
                        color="green"
                    />
                </Text>
                <StatusBar style="auto" />
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
