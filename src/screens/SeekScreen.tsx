import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';
import Swiper from 'react-native-deck-swiper';

import { chatsData } from '../constants/sampleData';
import { ScrollView } from 'react-native-gesture-handler';

export default function SeekScreen() {
    const theme = useTheme();
    const swiperRef = useRef<Swiper<any>>(null);

    return (
        <>
            <View style={styles.container}>
                <Swiper
                    cards={chatsData}
                    ref={swiperRef}
                    cardVerticalMargin={0}
                    cardHorizontalMargin={0}
                    swipeAnimationDuration={200}
                    infinite
                    horizontalThreshold={150}
                    stackAnimationFriction={40}
                    stackAnimationTension={40}
                    overlayLabels={{
                        left: {
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: 'red',
                                    borderColor: 'red',
                                    color: 'white',
                                    borderWidth: 1,
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30,
                                },
                            },
                        },
                        right: {
                            title: 'YEP',
                            style: {
                                label: {
                                    backgroundColor: 'green',
                                    borderColor: 'green',
                                    color: 'white',
                                    borderWidth: 1,
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30,
                                },
                            },
                        },
                    }}
                    animateOverlayLabelsOpacity
                    verticalSwipe={false}
                    renderCard={data => {
                        return (
                            <ScrollView>
                                <View
                                    onStartShouldSetResponder={() => true}
                                    onTouchEnd={e => {
                                        e.stopPropagation();
                                    }}
                                    style={styles.card}>
                                    <View style={styles.cardPicture}>
                                        <Text style={styles.text}>{data.name}</Text>
                                    </View>
                                    <View style={styles.cardDescription}>
                                        <Text style={styles.text}>Description</Text>
                                    </View>
                                </View>
                            </ScrollView>
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
                    containerStyle={styles.container}
                    stackSize={2}
                    stackSeparation={0}
                    stackScale={2}
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
    },
    containerAlt: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    card: {
        height: '95%',
        width: '95%',
        marginTop: '2.5%',
        borderRadius: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: 'white',
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
    },
    cardPicture: {
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDescription: {
        height: 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
