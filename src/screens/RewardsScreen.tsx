import React from 'react';
import { StyleSheet, View } from 'react-native';

import SelectionCard from '../components/SelectionCard';
import { tiers } from '../constants/sampleData';

export default function RewardsScreen() {
    return (
        <View style={styles.container}>
            {tiers.map((card, index) => {
                return <SelectionCard title={card} key={index} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
