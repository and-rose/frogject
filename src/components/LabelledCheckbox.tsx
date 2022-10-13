import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

export type status = 'checked' | 'unchecked' | 'indeterminate';

function LabelledCheckbox(props: { label: string; status: status; onPress: () => void }) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox status={props.status} />
                <Text style={{ fontFamily: 'JosefinSans_400Regular' }}>{props.label}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default LabelledCheckbox;
