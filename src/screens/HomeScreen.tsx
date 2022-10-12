import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import SelectionCard from '../components/SelectionCard';
import { homeCardsData } from '../constants/sampleData';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {homeCardsData.map((card, index) => {
                return (
                    <SelectionCard title={card.title} route={card.route} key={index} clickable />
                );
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
