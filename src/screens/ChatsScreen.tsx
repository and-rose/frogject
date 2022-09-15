import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, List, Text, useTheme } from 'react-native-paper';
import { chatsData } from '../utils/sampleData';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { getInitials } from '../utils/stringUtils';

TimeAgo.addLocale(en);

export default function ChatsScreen() {
    const theme = useTheme();
    const timeAgo = new TimeAgo('en-US');

    return (
        <View>
            <FlatList
                data={chatsData}
                renderItem={(data) => (
                    <List.Item
                        title={data.item.name}
                        onPress={() => {}}
                        description={data.item.lastMessage.text}
                        left={() => (
                            <Avatar.Text
                                size={45}
                                style={{ alignSelf: 'center' }}
                                label={getInitials(data.item.name)}
                            />
                        )}
                        right={() => (
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    fontSize: 12,
                                    opacity: 0.5,
                                    alignSelf: 'center',
                                }}>
                                {timeAgo.format(data.item.lastMessage.createdAt)}
                            </Text>
                        )}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
