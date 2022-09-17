import * as React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import { Chip, Divider, Text } from 'react-native-paper';
import { LoremIpsum } from 'lorem-ipsum';
import { infoData } from '../constants/sampleData';

export interface SeekProfileCardProps {
    profileData: any;
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
                        style={styles.cardPicture}
                        resizeMode="cover"
                        source={require('../../assets/400x700.png')}>
                        <Text style={styles.text}>{props.profileData.name}</Text>
                    </ImageBackground>
                    <View style={styles.cardDescription}>
                        <Divider bold style={{ marginBottom: 5 }} />
                        <Text variant="titleMedium">About Me</Text>
                        <Text variant="bodyMedium">{lorem1}</Text>
                        <Divider bold style={{ marginVertical: 10 }} />
                        <Text variant="titleMedium">Basic Info</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                            }}>
                            {infoData.map((infoPiece, index) => {
                                return (
                                    <Chip style={{ margin: 5 }} key={index}>
                                        {infoPiece}
                                    </Chip>
                                );
                            })}
                        </View>
                        <Divider bold style={{ marginVertical: 10 }} />
                        <Text variant="titleMedium">Interests</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                            }}>
                            {infoData.map((infoPiece, index) => {
                                return (
                                    <Chip style={{ margin: 5 }} key={index}>
                                        {infoPiece}
                                    </Chip>
                                );
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
        height: '81%',
        padding: 15,
        marginTop: '2.5%',
        borderRadius: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#E8E8E8',
        backgroundColor: 'white',
    },
    text: {
        padding: 20,
        textAlign: 'left',
        fontSize: 30,
    },
    cardPicture: {
        height: 600,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    cardDescription: {},
});
