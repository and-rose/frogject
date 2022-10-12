import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Text, TextInput, useTheme } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { RootStackParamList } from '../../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function RegistrationDetailsScreen({ navigation }: Props) {
    const theme = useTheme();
    const [name, setName] = useState('');
    const [pronouns, setPronouns] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [bio, setBio] = useState('');
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('date');

    const showMode = (currentMode: any) => {
        setOpen(true);
        setMode(currentMode);
    };

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setOpen(Platform.OS === 'ios');
        setDate(currentDate);

        const tempDate = new Date(currentDate);
        const fDate = tempDate.getMonth() + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
        setDateOfBirth(fDate);

        console.log('date of birth: ' + dateOfBirth);
    };

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
                        <Avatar.Icon
                            size={175}
                            icon="camera"
                            style={{ margin: 30, alignSelf: 'center' }}
                        />
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Name</Text>
                            <TextInput
                                mode="outlined"
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Pronouns</Text>
                            <TextInput
                                mode="outlined"
                                value={pronouns}
                                onChangeText={text => setPronouns(text)}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>Date of Birth</Text>
                            <TextInput
                                mode="outlined"
                                value={dateOfBirth}
                                right={
                                    <TextInput.Icon
                                        icon="calendar"
                                        onPress={() => showMode('date')}
                                    />
                                }
                                onChangeText={text => setDateOfBirth(text)}
                            />
                        </View>
                        <View style={styles.entryBlock}>
                            <Text style={styles.entryText}>About Me</Text>
                            <TextInput
                                mode="outlined"
                                value={bio}
                                style={{ height: 100 }}
                                multiline={true}
                                onChangeText={text => setBio(text)}
                            />
                        </View>
                    </View>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('RegistrationInterests')}
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
            {open && (
                <DateTimePicker
                    testID="dateTimePicker"
                    mode="date"
                    value={date || new Date()}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
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
