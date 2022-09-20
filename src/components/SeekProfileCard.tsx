import * as React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import { Chip, Divider, IconButton, Text, useTheme } from 'react-native-paper';
import { LoremIpsum } from 'lorem-ipsum';
import { infoData, shortInfoData } from '../constants/sampleData';
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
            <ScrollView>
                <View
                    onStartShouldSetResponder={() => true}
                    onTouchEnd={e => {
                        e.stopPropagation();
                    }}
                    style={styles.container}>
                    <ImageBackground
                        imageStyle={{
                            overflow: 'hidden',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                        style={styles.cardPicture}
                        resizeMode="cover"
                        source={require('../../assets/400x700.png')}>
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
                            <Text style={styles.text}>{props.profileData.name}</Text>
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
        backgroundColor: 'white',
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
