import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, List, Text, useTheme } from 'react-native-paper';
import { chatsData } from '../constants/sampleData';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { getInitials } from '../utils/stringUtils';
import { FontAwesome } from '@expo/vector-icons';

TimeAgo.addLocale(en);

export default function ChatListScreen() {
    const theme = useTheme();
    const timeAgo = new TimeAgo('en-US');

    return (
        <View>
            <FlatList
                data={chatsData}
                renderItem={data => (
                    <List.Item
                        title={data.item.name}
                        descriptionStyle={data.item.unread ? { fontWeight: 'bold' } : {}}
                        titleStyle={
                            data.item.unread
                                ? { fontWeight: 'bold', color: theme.colors.primary }
                                : {}
                        }
                        onPress={() => {}}
                        description={data.item.lastMessage.text}
                        left={() => (
                            <Avatar.Text
                                size={65}
                                style={{ alignSelf: 'center', marginLeft: 10, marginRight: 10 }}
                                label={getInitials(data.item.name)}
                            />
                        )}
                        right={() =>
                            data.item.unread ? (
                                <FontAwesome
                                    name="circle"
                                    size={15}
                                    color={theme.colors.primary}
                                    style={{
                                        alignSelf: 'center',
                                        marginRight: 10,
                                        marginLeft: 10,
                                    }}
                                />
                            ) : (
                                <Text
                                    style={{
                                        color: theme.colors.text,
                                        fontSize: 12,
                                        opacity: 0.5,
                                        alignSelf: 'center',
                                    }}>
                                    {timeAgo.format(data.item.lastMessage.createdAt)}
                                </Text>
                            )
                        }
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
