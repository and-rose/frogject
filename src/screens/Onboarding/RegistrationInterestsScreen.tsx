import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Button, Text, useTheme } from 'react-native-paper';

import { ChipSet } from '../../components/ChipSet';
import { RootStackParamList } from '../../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function RegistrationInterestsScreen({ navigation }: Props) {
    const theme = useTheme();
    const [role, setRole] = useState(-1);
    const [rank, setRank] = useState(-1);
    const [server, setServer] = useState(-1);
    const [interests, setInterests] = useState(-1);

    return (
        <>
            <Appbar.Header
                mode={'center-aligned'}
                style={{ backgroundColor: theme.colors.backgroundVariant }}>
                <Appbar.BackAction
                    onPress={() => {
                        navigation.pop();
                    }}
                />
                <Appbar.Content title={'Sign Up'} />
            </Appbar.Header>
            <ScrollView
                contentContainerStyle={{
                    alignContent: 'center',
                }}>
                <View style={{ margin: 25 }}>
                    <View style={{ alignContent: 'center' }}>
                        <Text
                            variant="titleMedium"
                            style={{ textTransform: 'uppercase', alignSelf: 'center' }}>
                            Tell us about yourself
                        </Text>

                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Role</Text>
                            <ChipSet
                                data={['Sentinel', 'Duelist', 'Initiator', 'Controller']}
                                selectedIndex={role}
                                setIndex={setRole}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Rank</Text>
                            <ChipSet
                                data={[
                                    'Iron',
                                    'Bronze',
                                    'Silver',
                                    'Gold',
                                    'Platinum',
                                    'Diamond',
                                    'Ascendant',
                                    'Immortal',
                                    'Radiant',
                                ]}
                                selectedIndex={rank}
                                setIndex={setRank}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Server</Text>
                            <ChipSet
                                data={[
                                    'North America',
                                    'Latin America',
                                    'Brazil',
                                    'Europe',
                                    'Asia Pacific',
                                    'Korea',
                                ]}
                                selectedIndex={server}
                                setIndex={setServer}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Interests</Text>
                            <ChipSet
                                data={['Film', 'TV', 'Books', 'Food', 'Sport', 'Art']}
                                selectedIndex={interests}
                                setIndex={setInterests}
                            />
                        </View>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.replace('REGROUP', { screen: 'Home' })}
                        style={{ marginTop: 20, width: 150, alignSelf: 'center' }}
                        uppercase
                        labelStyle={{
                            fontSize: 16,
                            fontFamily: 'JosefinSans_400Regular',
                        }}>
                        Next
                    </Button>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    entryBlock: {
        marginTop: 10,
    },
    entryText: {
        marginVertical: 5,
        textTransform: 'uppercase',
    },
});
