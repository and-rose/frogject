import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, useTheme, Text, Appbar, TextInput, Avatar } from 'react-native-paper';
import { ChipSet } from '../../components/ChipSet';

import { RootStackParamList } from '../../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function RegistrationInterestsScreen({ navigation }: Props) {
    const theme = useTheme();
    const [text, setText] = React.useState('');

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
                            <Text style={styles.entryText}>Name</Text>
                            <ChipSet data={['one', 'two', 'three', 'four', 'five', 'six']} />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Pronouns</Text>
                            <ChipSet data={['one', 'two', 'three', 'elevent', 'sixteen']} />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Date of Birth</Text>
                            <ChipSet
                                data={['one', 'two', 'three', 'forty', 'hundred', 'thousand']}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>About Me</Text>
                            <ChipSet
                                data={[
                                    'one',
                                    'two',
                                    'three',
                                    'words',
                                    'more words',
                                    'less words',
                                    'psyche',
                                ]}
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
