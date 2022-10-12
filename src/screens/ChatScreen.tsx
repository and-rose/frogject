import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { useTheme } from 'react-native-paper';

function REGROUPChatBubble(props: any) {
    return <Bubble {...props} />;
}

export function ChatScreen() {
    const [messages, setMessages] = useState<any>([]);
    const theme = useTheme();

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Initial Message',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages: any) => {
        setMessages((previousMessages: any) => GiftedChat.append(previousMessages, messages));
    }, []);

    return (
        <GiftedChat
            messages={messages}
            renderBubble={props => {
                return (
                    <Bubble
                        {...props}
                        // renderMessageText={message.data.text}
                        wrapperStyle={{
                            left: {
                                borderBottomLeftRadius: 0,
                                padding: 5,
                                backgroundColor: theme.colors.chatBubbleColor,
                            },
                            right: {
                                backgroundColor: theme.colors.chatBubbleColorVariant,
                                borderBottomRightRadius: 0,
                                padding: 5,
                            },
                        }}
                    />
                );
            }}
            renderTime={() => null}
            renderComposer={() => null}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
});

function createMaterialTopTabNavigator() {
    throw new Error('Function not implemented.');
}
