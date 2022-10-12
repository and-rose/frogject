import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, ProgressBar, useTheme, Card, Badge } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SelectionCard from '../components/SelectionCard';
import {
    endorsementTypes,
    EndorsementDetails,
    tiers,
    rewardsProgress,
} from '../constants/sampleData';

function EndorsementCard(props: { endorsement: EndorsementDetails; count: number }) {
    const theme = useTheme();
    const endorsement = props.endorsement;

    return (
        <View>
            <Badge style={[styles.badge, { backgroundColor: theme.colors.primary }]} size={25}>
                {props.count}
            </Badge>
            <View
                style={[
                    styles.endorsementCard,
                    { borderColor: theme.colors.secondary, borderWidth: 2, flex: 3 },
                ]}>
                <MaterialCommunityIcons name={endorsement.icon} size={35} style={{ padding: 10 }} />
                <View
                    style={[
                        styles.endorsementCardHeader,
                        {
                            backgroundColor: theme.colors.secondary,
                        },
                    ]}>
                    <Text style={[styles.endorsementCardTitle, { color: '#fff' }]}>
                        {endorsement.title}
                    </Text>
                </View>
            </View>
        </View>
    );
}

function RewardCard(props: { rewardName: string }) {
    const theme = useTheme();
    const rewardName = props.rewardName;

    return (
        <Card style={[styles.rewardsCard, { backgroundColor: theme.colors.tertiary }]}>
            {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
            <Card.Content style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.endorsementCardTitle}>{rewardName}</Text>
            </Card.Content>
        </Card>
    );
}

export default function RewardsScreen() {
    const theme = useTheme();
    const [rewards, setRewards] = React.useState(rewardsProgress);

    return (
        <ScrollView
            contentContainerStyle={{
                alignContent: 'center',
                backgroundColor: theme.colors.background,
            }}>
            <View style={{ margin: 25 }}>
                <View style={{ alignContent: 'center' }}>
                    <Text
                        variant="titleLarge"
                        style={{
                            textTransform: 'uppercase',
                            marginBottom: 10,
                            fontFamily: 'JosefinSans_400Regular',
                        }}>
                        Tier 2
                    </Text>
                    <Text style={styles.entryText}>Endorsement Progress</Text>
                    <ProgressBar
                        progress={rewards.endorsementProgress / 1000}
                        color={theme.colors.primary}
                        style={{ height: 20, borderRadius: 10, marginTop: 10 }}
                    />
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>My Endorsements</Text>
                        <View style={{ paddingLeft: 2, flexDirection: 'row' }}>
                            {endorsementTypes.map((endorsement, index) => (
                                <EndorsementCard
                                    endorsement={endorsement}
                                    count={rewards.endorsementsCounts.clutchedUp}
                                    key={index}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.entryBlock}>
                        <Text style={styles.entryText}>My Rewards</Text>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{ paddingLeft: 2, paddingVertical: 20 }}>
                            {rewards.availableRewards.map((name, index) => (
                                <RewardCard rewardName={name} key={index} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.entryBlock}>
                    <Text style={styles.entryText}>Monthly Rewards</Text>
                    <View style={styles.container}>
                        {tiers.map((card, index) => {
                            return <SelectionCard title={card} key={index} fontSize={18} />;
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    entryBlock: {
        marginTop: 10,
    },
    entryText: {
        marginVertical: 5,
        textTransform: 'uppercase',
        fontFamily: 'JosefinSans_400Regular',
    },
    endorsementCard: {
        backgroundColor: '#fff',
        marginRight: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 110,
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
    },
    endorsementCardHeader: {
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
        flex: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    endorsementCardTitle: {
        fontFamily: 'JosefinSans_400Regular',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    rewardsCard: {
        flex: 1,
        marginRight: 10,
        height: 110,
        width: 80,
        borderRadius: 10,
    },
});
