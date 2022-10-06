import React from 'react';
import { View } from 'react-native';
import { Chip, useTheme } from 'react-native-paper';
import { REGROUPChip } from './REGROUPChip';

export function ChipSet(props: {
    data: string[];
    selectedIndex: number;
    setIndex: (index: number) => void;
}) {
    const theme = useTheme();

    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
            }}>
            {props.data.map((infoPiece, index) => {
                return (
                    <REGROUPChip
                        onPress={() => {
                            console.log('pressed', index);
                            props.setIndex(index);
                        }}
                        key={index}
                        text={infoPiece}
                        emphasis={props.selectedIndex !== index ? 'unfocused' : 'none'}
                    />
                );
            })}
        </View>
    );
}
