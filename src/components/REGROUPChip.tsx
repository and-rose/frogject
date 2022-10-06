import React from 'react';
import { Chip, useTheme } from 'react-native-paper';

type emphasisStyle = 'none' | 'unfocused' | 'focused';

export function REGROUPChip(props: {
    text: string;
    emphasis: emphasisStyle;
    onPress?: () => void;
}) {
    const theme = useTheme();

    function getBackgroundColor(emphasis: emphasisStyle) {
        switch (emphasis) {
            case 'none':
                return theme.colors.secondary;
            case 'unfocused':
                return theme.colors.unfocused;
            case 'focused':
                return theme.colors.primary;
        }
    }

    function getColor(emphasis: emphasisStyle) {
        switch (emphasis) {
            case 'none':
                return theme.colors.background;
            case 'unfocused':
                return theme.colors.onBackground;
            case 'focused':
                return theme.colors.background;
        }
    }

    return (
        <Chip
            style={{
                backgroundColor: getBackgroundColor(props.emphasis),
                marginRight: 10,
                marginVertical: 5,
                borderRadius: 20,
            }}
            onPress={props.onPress}
            textStyle={{
                color: getColor(props.emphasis),
                textTransform: 'uppercase',
            }}>
            {props.text}
        </Chip>
    );
}
