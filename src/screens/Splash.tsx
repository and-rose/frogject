import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { MD2Colors, Text, useTheme } from "react-native-paper";
import Svg, { SvgXml } from "react-native-svg";
import uuundulateShape from "../constants/svgShapes";

export default function SplashScreen() {
    const theme = useTheme();

    return (
        <View
            style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <SvgXml
                xml={uuundulateShape}
                style={{ position: "absolute", top: 0, opacity: 0.15 }}
            />
            <View
                style={{
                    backgroundColor: theme.colors.background,
                    padding: 15,
                    borderRadius: 50,
                }}
            >
                <Text
                    style={{
                        color: MD2Colors.green700,
                        textTransform: "uppercase",
                        fontFamily: "Roboto_400Regular",
                        letterSpacing: 1.5,
                        opacity: 0.2,
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
            </View>
        </View>
    );
}