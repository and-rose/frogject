import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';
import Swiper from 'react-native-deck-swiper';

import { chatsData } from '../utils/sampleData';

export default function SeekScreen() {
    const theme = useTheme();
    const [cardIndex, setCardIndex] = useState(0);
    const swiperRef = useRef<Swiper<any>>(null);

    return (
        <>
            <View style={styles.container}>
                <Swiper
                    cards={chatsData}
                    ref={swiperRef}
                    renderCard={data => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{data.name}</Text>
                            </View>
                        );
                    }}
                    onSwiped={index => {
                        console.log(index);
                    }}
                    onSwipedAll={() => {
                        console.log('onSwipedAll');
                    }}
                    cardIndex={0}
                    backgroundColor={theme.colors.background}
                    stackSize={2}
                />
            </View>
            <View style={styles.containerAlt}>
                <IconButton
                    icon="close"
                    mode="contained"
                    iconColor={theme.colors.error}
                    size={50}
                    onPress={() => {
                        swiperRef.current?.swipeLeft();
                    }}
                />
                <IconButton
                    icon="heart"
                    mode="contained"
                    iconColor={theme.colors.success}
                    size={50}
                    onPress={() => {
                        swiperRef.current?.swipeRight();
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerAlt: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    card: {
        height: '80%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: 'transparent',
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent',
    },
});
