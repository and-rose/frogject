import { LoremIpsum } from 'lorem-ipsum';
import * as React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Divider, IconButton, Text, useTheme } from 'react-native-paper';

import { infoData, shortInfoData } from '../constants/sampleData';
import LeaperTheme from '../constants/theme';
import { REGROUPChip } from './REGROUPChip';

export interface SeekProfileCardProps {
    profileData: any;
    swiperRef: any;
}

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const lorem1 = lorem.generateSentences(3);

export function SeekProfileCard(props: SeekProfileCardProps) {
    const theme = useTheme();
    return (
        <View style={styles.card}>
            <ScrollView
                decelerationRate={'fast'}
                snapToInterval={500} //your element width
                snapToAlignment={'center'}>
                <View
                    onStartShouldSetResponder={() => true}
                    onTouchEnd={e => {
                        e.stopPropagation();
                    }}
                    style={styles.container}>
                    <ImageBackground
                        imageStyle={{
                            overflow: 'hidden',
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                        }}
                        style={styles.cardPicture}
                        resizeMode="cover"
                        source={props.profileData.profilePic}>
                        <View style={styles.containerAlt}>
                            <IconButton
                                icon="close"
                                mode="contained"
                                iconColor={theme.colors.background}
                                size={50}
                                onPress={() => {
                                    props.swiperRef.current?.swipeLeft();
                                }}
                            />
                            <IconButton
                                icon="heart"
                                mode="contained"
                                iconColor={theme.colors.background}
                                size={50}
                                onPress={() => {
                                    props.swiperRef.current?.swipeRight();
                                }}
                            />
                        </View>
                        <View style={styles.nameAndDetails}>
                            <Text style={styles.text}>{props.profileData.username}</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start',
                                }}>
                                {shortInfoData.map((infoPiece, index) => {
                                    return (
                                        <REGROUPChip
                                            key={index}
                                            text={infoPiece}
                                            emphasis="focused"
                                        />
                                    );
                                })}
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.cardDescription}>
                        <Text variant="titleMedium">About Me</Text>
                        <Text variant="bodyMedium">{lorem1}</Text>
                        <Divider bold style={{ marginVertical: 10 }} />
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                            }}>
                            {infoData.map((infoPiece, index) => {
                                return <REGROUPChip key={index} text={infoPiece} emphasis="none" />;
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        width: '100%',
        height: '83.5%',
        alignSelf: 'center',
        backgroundColor: LeaperTheme.colors.backgroundVariant,
    },
    nameAndDetails: {
        position: 'absolute',
        marginLeft: 5,
        padding: 10,
    },
    text: {
        fontFamily: 'JosefinSans_400Regular',
        textAlign: 'left',
        fontSize: 30,
        marginBottom: 10,
    },
    cardPicture: {
        height: 690,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    cardDescription: {
        padding: 10,
    },
    containerAlt: {
        width: '100%',
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
