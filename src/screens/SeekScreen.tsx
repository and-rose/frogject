import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import TinderCard from 'react-tinder-card';
import { chatsData } from '../utils/sampleData';

const onSwipe = (direction: string) => {
    console.log('You swiped: ' + direction);
};

const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + ' left the screen');
};

export default function SeekScreen() {
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction: any, nameToDelete: string) => {
        console.log('removing: ' + nameToDelete);
        setLastDirection(direction);
    };

    const outOfFrame = (name: string) => {
        console.log(name + ' left the screen!');
    };

    return (
        <View style={styles.container}>
            {chatsData.map((chatData, index) => {
                return (
                    <TinderCard
                        key={index}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}>
                        <Card
                            style={{
                                position: 'absolute',
                                height: 650,
                                top: -325,
                                left: -200,
                                borderRadius: 20,
                                width: 400,
                            }}>
                            <Card.Content>
                                <View
                                    style={{
                                        alignItems: 'center',
                                    }}>
                                    <Text>{chatData.name}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </TinderCard>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
