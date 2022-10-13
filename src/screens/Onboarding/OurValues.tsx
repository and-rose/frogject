import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, Avatar, Button, Checkbox, Text, TextInput, useTheme } from 'react-native-paper';
import LabelledCheckbox, { status } from '../../components/LabelledCheckbox';
import { regroupQuizValues, regroupValues } from '../../constants/sampleData';

import { RootStackParamList } from '../../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function OurValuesScreen({ navigation }: Props) {
    const theme = useTheme();
    const [terms1, setTerms1] = useState<status>('unchecked');
    const [terms2, setTerms2] = useState<status>('unchecked');

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
                <View style={{ margin: 25, flex: 1 }}>
                    <View style={{ alignContent: 'center' }}>
                        <Text
                            variant="titleMedium"
                            style={{ textTransform: 'uppercase', alignSelf: 'center' }}>
                            Our Values
                        </Text>

                        <View style={styles.entryBlock}>
                            {regroupValues.map((value, index) => {
                                return (
                                    <View style={styles.valueBlock} key={index}>
                                        <Avatar.Text
                                            size={35}
                                            label={(index + 1).toString()}
                                            labelStyle={{ fontWeight: 'bold', color: 'white' }}
                                            style={{
                                                margin: 20,
                                                alignSelf: 'center',
                                                backgroundColor: theme.colors.secondary,
                                            }}
                                        />
                                        <Text style={styles.onboardingText}>{value}</Text>
                                    </View>
                                );
                            })}
                        </View>
                        <View style={styles.entryBlock}>
                            <LabelledCheckbox
                                label="Please read and acknowlege our values "
                                status={terms1}
                                onPress={() => {
                                    setTerms1(terms1 === 'unchecked' ? 'checked' : 'unchecked');
                                }}
                            />
                            <LabelledCheckbox
                                label="I Agree to the Terms & Conditions"
                                status={terms2}
                                onPress={() => {
                                    setTerms2(terms2 === 'unchecked' ? 'checked' : 'unchecked');
                                }}
                            />
                        </View>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('OurValuesQuiz')}
                        style={{ marginTop: 20, alignSelf: 'center' }}
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

export function OurValuesQuizScreen({ navigation }: Props) {
    const theme = useTheme();
    const valueQuizState = regroupQuizValues.map(value => {
        return {
            value: value,
            status: false,
        };
    });
    const [quizValuesState, setQuizValuesState] = useState(valueQuizState);

    function updateQuizState(index: number, status: boolean) {
        const newQuizState = [...quizValuesState];
        newQuizState[index].status = !status;
        setQuizValuesState(newQuizState);
    }

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
                <View style={{ margin: 25, flex: 1 }}>
                    <View style={{ alignContent: 'center' }}>
                        <Text
                            variant="titleMedium"
                            style={{ textTransform: 'uppercase', alignSelf: 'center' }}>
                            Our Values
                        </Text>
                        <View style={styles.entryBlock}>
                            <Text style={styles.onboardingText}>
                                To ensure you have understood our values, please select up to 5 to
                                complete setting up your account.
                            </Text>
                        </View>
                        <View style={styles.entryBlock}>
                            {quizValuesState.map((value, index) => {
                                return (
                                    <Button
                                        key={index}
                                        mode={value.status ? 'contained-tonal' : 'outlined'}
                                        style={{
                                            marginTop: 10,
                                            borderColor: theme.colors.secondary,
                                            borderWidth: 1,
                                        }}
                                        onPress={() => {
                                            updateQuizState(index, value.status);
                                        }}
                                        labelStyle={
                                            value.status ? { color: 'white' } : { color: 'black' }
                                        }>
                                        {value.value}
                                    </Button>
                                );
                            })}
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => navigation.replace('REGROUP', { screen: 'Home' })}
                            style={{ marginTop: 20, alignSelf: 'center' }}
                            uppercase
                            labelStyle={{
                                fontSize: 16,
                                fontFamily: 'JosefinSans_400Regular',
                            }}>
                            Next
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    entryBlock: {
        marginTop: 10,
    },
    valueBlock: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    entryText: {
        marginVertical: 5,
        fontFamily: 'JosefinSans_400Regular',
        textTransform: 'uppercase',
    },
    onboardingText: {
        marginVertical: 5,
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 15,
    },
});
