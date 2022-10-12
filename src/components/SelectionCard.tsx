import { TabActionHelpers, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, TouchableRipple } from 'react-native-paper';

import { HomeStackParams } from '../navigation/BottomTabs';
import { RootStackParamList } from '../navigation/Navigation';

export default function SelectionCard(props: {
    title: string;
    route?: keyof HomeStackParams | keyof RootStackParamList;
    fontSize?: number;
    clickable?: boolean;
}) {
    const tabNavigation = useNavigation<TabActionHelpers<HomeStackParams>>();
    const stackNavigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <TouchableRipple onPress={() => {}}>
            <View>
                <Card
                    style={styles.card}
                    collapsable
                    onPress={() => {
                        if (props.clickable) {
                            if (props.route !== 'Rewards') {
                                tabNavigation.jumpTo(props.route);
                            } else {
                                stackNavigation.navigate(props.route);
                            }
                        }
                    }}
                    mode="contained">
                    <Card.Content style={styles.cardTitleView}>
                        <Text
                            variant="headlineSmall"
                            style={{
                                fontFamily: 'JosefinSans_400Regular',
                                fontSize: props.fontSize ?? 30,
                                textTransform: 'uppercase',
                                color: '#FFFFFF',
                            }}>
                            {props.title}
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </TouchableRipple>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card: {
        borderRadius: 15,
        height: 150,
        marginVertical: 10,
    },
    cardTitleText: {
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardTitleView: {
        justifyContent: 'flex-end',
        flex: 1,
    },
});
