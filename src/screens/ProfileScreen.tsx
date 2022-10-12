import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Avatar, Button, Text, TextInput, useTheme } from 'react-native-paper';
import { ChipSet } from '../components/ChipSet';
import { REGROUPChip } from '../components/REGROUPChip';
import { RootStackParamList } from '../navigation/Navigation';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function ProfileScreen({ navigation }: Props) {
    return (
        <ScrollView
            contentContainerStyle={{
                alignContent: 'center',
            }}>
            <View style={{ margin: 25, flex: 1 }}>
                <View style={{ alignContent: 'center' }}>
                    <Avatar.Icon
                        size={175}
                        icon="camera"
                        style={{ margin: 30, alignSelf: 'center' }}
                    />
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Name</Text>
                        <Text style={styles.detailsText}>Braith</Text>
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Pronouns</Text>
                        <Text style={styles.detailsText}>He/Him</Text>
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Date of Birth</Text>
                        <Text style={styles.detailsText}>05/06/2001</Text>
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>About Me</Text>
                        <Text style={styles.detailsText}>
                            I am a student at the University of Washington.
                        </Text>
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Role</Text>
                        <REGROUPChip text={'Sentinel'} emphasis={'none'} />
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Rank</Text>
                        <REGROUPChip text={'Silver'} emphasis={'none'} />
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Server</Text>
                        <REGROUPChip text={'Asia Pacific'} emphasis={'none'} />
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>Interests</Text>
                        <REGROUPChip text={'Books'} emphasis={'none'} />
                    </View>
                </View>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('RegistrationInterests')}
                    style={{ marginTop: 20, alignSelf: 'center' }}
                    uppercase
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: 'JosefinSans_400Regular',
                    }}>
                    Edit Profile
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    entryBlock: {
        marginTop: 10,
    },
    entryText: {
        fontFamily: 'JosefinSans_700Bold',
        marginVertical: 5,
        textTransform: 'uppercase',
    },
    detailsText: {
        fontFamily: 'JosefinSans_400Regular',
        marginVertical: 5,
        fontSize: 16,
    },
});
