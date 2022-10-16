import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { useTheme } from 'react-native-paper';

import { SeekProfileCard } from '../components/SeekProfileCard';
import { chatsData } from '../constants/sampleData';

export default function SeekScreen() {
    const theme = useTheme();
    const swiperRef = useRef<Swiper<any>>(null);

    return (
        <>
            <View style={styles.container}>
                <Swiper
                    cards={chatsData}
                    ref={swiperRef}
                    animateOverlayLabelsOpacity
                    overlayOpacityHorizontalThreshold={10}
                    cardVerticalMargin={0}
                    cardHorizontalMargin={0}
                    swipeAnimationDuration={200}
                    horizontalThreshold={120}
                    infinite
                    stackAnimationFriction={40}
                    stackAnimationTension={40}
                    verticalSwipe={false}
                    cardIndex={0}
                    backgroundColor={theme.colors.backgroundVariant}
                    containerStyle={styles.container}
                    stackSize={2}
                    stackSeparation={0}
                    stackScale={10}
                    renderCard={data => {
                        return <SeekProfileCard profileData={data} swiperRef={swiperRef} />;
                    }}
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
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
