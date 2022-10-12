import { HomeStackParams } from '../navigation/BottomTabs';

export const chatsData = [
    {
        id: 1,
        name: 'Ethan',
        unread: true,
        lastMessage: {
            text: 'You on your way?',
            createdAt: new Date(),
        },
    },
    {
        id: 2,
        name: 'Bryan',
        unread: true,
        lastMessage: {
            text: "Hey, it's me",
            createdAt: new Date(Date.UTC(2022, 8, 11, 17, 20, 0)),
        },
    },
    {
        id: 3,
        name: 'Avery',
        unread: true,
        lastMessage: {
            text: 'I should buy a boat',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 4,
        name: 'Katie',
        unread: false,
        lastMessage: {
            text: 'Look at my mukluks!',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 5,
        name: 'Ray',
        unread: false,
        lastMessage: {
            text: 'This is wicked good ice cream.',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 6,
        name: 'Bryan',
        unread: false,
        lastMessage: {
            text: "Hey, it's me",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 7,
        name: 'Avery',
        unread: false,
        lastMessage: {
            text: 'I should buy a boat',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 8,
        name: 'Katie',
        unread: false,
        lastMessage: {
            text: 'Look at my mukluks!',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 9,
        name: 'Ray',
        unread: false,
        lastMessage: {
            text: 'This is wicked good ice cream.',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 10,
        name: 'Katie',
        unread: false,
        lastMessage: {
            text: 'Look at my mukluks!',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 11,
        name: 'Ray',
        unread: false,
        lastMessage: {
            text: 'This is wicked good ice cream.',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 12,
        name: 'Bryan',
        unread: false,
        lastMessage: {
            text: "Hey, it's me",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 13,
        name: 'Avery',
        unread: false,
        lastMessage: {
            text: 'I should buy a boat',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 14,
        name: 'Katie',
        unread: false,
        lastMessage: {
            text: 'Look at my mukluks!',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 15,
        name: 'Ray',
        unread: false,
        lastMessage: {
            text: 'This is wicked good ice cream.',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
];

export const homeCardsData: { title: string; route: keyof HomeStackParams }[] = [
    {
        title: 'Profile',
        route: 'Profile',
    },
    {
        title: 'Swipe',
        route: 'Swipe',
    },
    {
        title: 'Messaging',
        route: 'Messaging',
    },
    {
        title: 'Rewards Store',
        route: 'Rewards',
    },
];

export const infoData = ['Male', 'Oceania', '18-30', 'Valorant', 'Casual'];
export const shortInfoData = ['Sentinel', 'Silver'];

export const tiers = ['Tier 1', 'Tier 2', 'Tier 3'];

export const rewardsProgress = {
    endorsementProgress: 700,
    endorsementsCounts: {
        goodSportsmanship: 0,
        mostValuablePlayer: 0,
        clutchedUp: 0,
    },
    availableRewards: [
        "Gun Buddy",
        "Spray",
        "Player Card",
        "Title",
        "Weapon Skin",
        "Player Icon",
    ]
}

export type EndorsementDetails = {
    type: string;
    title: string;
    description: string;
    icon: 'hand-clap' | 'trophy' | 'medal';
}

export const endorsementTypes = [
    {
        type: 'goodSportsmanship',
        title: 'Good Sportsmanship',
        description: 'Be a good sport and show respect to your teammates and opponents.',
        icon: 'hand-clap',
    },
    {
        type: 'mostValuablePlayer',
        title: 'Most Valuable Player',
        description: 'Be a good sport and show respect to your teammates and opponents.',
        icon: 'trophy',
    },
    {
        type: 'clutchedUp',
        title: 'Clutched Up',
        description: 'Be a good sport and show respect to your teammates and opponents.',
        icon: 'medal',
    },
];
