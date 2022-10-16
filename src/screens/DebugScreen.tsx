import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Button, Dialog, List, Paragraph, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Navigation';

export default function DebugScreen() {
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => setVisible(false);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <List.Section>
                <List.Subheader>Triggers</List.Subheader>
                <List.Item
                    title="Haptic Trigger"
                    left={() => <List.Icon icon="vibrate" />}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    }}
                />
                <List.Item
                    title="Show New Match"
                    left={() => <List.Icon icon="heart" />}
                    onPress={() => {
                        console.log('Show new match');
                    }}
                />
                <List.Item
                    title="Show self-reflective warning"
                    left={() => <List.Icon icon="alert" />}
                    onPress={() => {
                        setVisible(true);
                    }}
                />
                <List.Item
                    title="Logout"
                    left={() => <List.Icon icon="logout" />}
                    onPress={() => {
                        navigation.replace('Login');
                    }}
                />
            </List.Section>
            <Portal>
                <Dialog visible={visible} dismissable={false}>
                    <Dialog.Icon icon="alert" />
                    <Dialog.Title style={styles.title}>Hey buddy...</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>
                            Just checking in! We think its time to review our values.
                        </Paragraph>
                        <Paragraph>
                            Note: your access to the app will be restricted until you complete these
                            tasks
                        </Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Dismiss</Button>
                        <Button
                            onPress={() => {
                                navigation.navigate('OurValues');
                                hideDialog();
                            }}>
                            Begin Tasks
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
});
