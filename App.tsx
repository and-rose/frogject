import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
    });

    if (!fontsLoaded) {
        return <ActivityIndicator />;
    } else {
        return (
            <PaperProvider>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <View
                        style={{
                            display: "flex",
                            flex: 1,
                            justifyContent: "space-around",
                        }}
                    >
                        <Text
                            style={{
                                color: MD2Colors.green700,
                                textTransform: "uppercase",
                                fontFamily: "Roboto_400Regular",
                                letterSpacing: 1.5,
                            }}
                            variant={"headlineLarge"}
                        >
                            Leaper
                            <MaterialCommunityIcons
                                name="debug-step-over"
                                size={35}
                                color={MD2Colors.green700}
                            />
                        </Text>
                        <ActivityIndicator
                            color={MD2Colors.green700}
                            size={40}
                        />
                    </View>
                </View>
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
