import React from 'react';
import { View } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';
import { REGROUPChip } from './REGROUPChip';

export function ChipSet(props: { data: string[] }) {
    const theme = useTheme();

    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}>
            {props.data.map((infoPiece, index) => {
                return <REGROUPChip key={index} text={infoPiece} emphasis="none" />;
            })}
        </View>
    );
}
