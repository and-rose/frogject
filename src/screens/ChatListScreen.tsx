import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, List, Text, useTheme } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

import { chatsData as rawChatData } from '../constants/sampleData';
import LeaperTheme from '../constants/theme';
import { RootStackParamList } from '../navigation/Navigation';
import { getInitials } from '../utils/stringUtils';

TimeAgo.addLocale(en);

type Props = NativeStackScreenProps<RootStackParamList>;

export function ChatListScreen({ navigation, route }: Props) {
    const theme = useTheme();
    const timeAgo = new TimeAgo('en-US');
    const [chatsData, setChatsData] = useState(
        rawChatData.map((_, i) => ({ key: `${i}`, data: rawChatData[i] }))
    );

    return (
        <View>
            <SwipeListView
                useFlatList={true}
                data={chatsData}
                renderItem={rowData => (
                    <List.Item
                        title={rowData.item.data.username}
                        style={{ backgroundColor: theme.colors.background }}
                        descriptionStyle={rowData.item.data.unread ? { fontWeight: 'bold' } : {}}
                        titleStyle={
                            rowData.item.data.unread
                                ? { fontWeight: 'bold', color: theme.colors.primary }
                                : {}
                        }
                        onPress={() =>
                            navigation.navigate('ChatTopTabs', { name: rowData.item.data.username })
                        }
                        description={rowData.item.data.lastMessage.text}
                        left={() => (
                            <Avatar.Text
                                size={65}
                                color={theme.colors.background}
                                style={{
                                    alignSelf: 'center',
                                    marginLeft: 10,
                                    marginRight: 10,
                                    backgroundColor: theme.colors.secondary,
                                }}
                                label={getInitials(rowData.item.data.username)}
                            />
                        )}
                        right={() =>
                            rowData.item.data.unread ? (
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
                                    {timeAgo.format(rowData.item.data.lastMessage.createdAt)}
                                </Text>
                            )
                        }
                    />
                )}
                renderToHardwareTextureAndroid
                friction={100}
                tension={100}
                renderHiddenItem={(rowData, rowMap) => (
                    <View style={styles.rowBack}>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}
                            onPress={() => rowMap[rowData.item.key].closeRow()}>
                            <Text style={styles.backTextWhite}>Report</Text>
                        </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={-75}
                onRowOpen={(rowKey, rowMap) => {
                    setTimeout(() => {
                        rowMap[rowKey].closeRow();
                    }, 2000);
                }}
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
    backTextWhite: {
        color: '#FFF',
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: LeaperTheme.colors.error,
        right: 0,
    },
});
