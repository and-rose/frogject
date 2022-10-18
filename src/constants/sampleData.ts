import { HomeStackParams } from '../navigation/BottomTabs';

export const chatsData = [
    {
        id: 1,
        username: 'icebear165',
        profilePic: require('../../assets/profileImages/controller.jpg'),
        unread: true,
        lastMessage: {
            text: 'You down for some games?',
            createdAt: new Date(),
        },
    },
    {
        id: 2,
        username: 'smokepitch',
        profilePic: require('../../assets/profileImages/invader.jpg'),
        unread: true,
        lastMessage: {
            text: "Let's play some ranked",
            createdAt: new Date(Date.UTC(2022, 8, 11, 17, 20, 0)),
        },
    },
    {
        id: 3,
        username: 'favourking',
        profilePic: require('../../assets/profileImages/keyboard.jpg'),
        unread: true,
        lastMessage: {
            text: "I'm feeling the itch for some Val",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 4,
        username: 'jamesbond',
        profilePic: require('../../assets/profileImages/switch.jpg'),
        unread: false,
        lastMessage: {
            text: 'The ranked grind is calling my name',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 5,
        username: 'aleksib',
        profilePic: require('../../assets/profileImages/mess.jpg'),
        unread: false,
        lastMessage: {
            text: 'Valorant is the best game ever',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 6,
        username: 's1mple',
        profilePic: require('../../assets/profileImages/leaderboard.jpg'),
        unread: false,
        lastMessage: {
            text: "Let's play some ranked",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 7,
        username: 'den1s',
        profilePic: require('../../assets/profileImages/reality.jpg'),
        unread: false,
        lastMessage: {
            text: 'Its gun buddy time!',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 8,
        username: 'Zywoo',
        profilePic: require('../../assets/profileImages/switch.jpg'),
        unread: false,
        lastMessage: {
            text: 'We got this',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 9,
        username: 'electronic',
        profilePic: require('../../assets/profileImages/controller.jpg'),
        unread: false,
        lastMessage: {
            text: 'Better luck next time :(',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 10,
        username: 'n0thing',
        profilePic: require('../../assets/profileImages/joystick.jpg'),
        unread: false,
        lastMessage: {
            text: 'You think we can win tonight?',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 11,
        username: 'dev1ce',
        profilePic: require('../../assets/profileImages/controller.jpg'),
        unread: false,
        lastMessage: {
            text: 'Valorant never gets old',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 12,
        username: 'kjaerbye',
        profilePic: require('../../assets/profileImages/leaderboard.jpg'),
        unread: false,
        lastMessage: {
            text: "I can't wait to play",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 13,
        username: 'dupreeh',
        profilePic: require('../../assets/profileImages/keyboard.jpg'),
        unread: false,
        lastMessage: {
            text: 'They were just better than us',
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 14,
        username: 'gla1ve',
        profilePic: require('../../assets/profileImages/mess.jpg'),
        unread: false,
        lastMessage: {
            text: "I've been practicing",
            createdAt: new Date(Date.UTC(2022, 5, 11, 17, 20, 0)),
        },
    },
    {
        id: 15,
        username: 'xyp9x',
        profilePic: require('../../assets/profileImages/joystick.jpg'),
        unread: false,
        lastMessage: {
            text: 'I learnt soem new Viper lineups!',
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

export const infoData = ['He/Him', 'Asia Pacific', 'Valorant', 'Books'];
export const shortInfoData = ['Sentinel', 'Silver'];

export const tiers = ['Tier 1 - Clutched Up', 'Tier 2 - MVP', 'Tier 3 - Good Sportsmanship'];

export const rewardsData = [
    {
        title: 'Weapon Skin',
        icon: 'pistol',
    },
    {
        title: 'Radianite Points',
        icon: 'diamond-stone',
    },
    {
        title: 'Gun Buddy',
        icon: 'dog',
    },
    {
        title: 'Player Card',
        icon: 'card-account-details',
    },
    {
        title: 'Spray',
        icon: 'spray',
    },
    {
        title: 'Player Title',
        icon: 'rename-box',
    },
];

export const rewardsProgress = {
    endorsementProgress: 700,
    endorsementsCounts: [2, 5, 12],
    availableRewards: rewardsData,
};

export type EndorsementDetails = {
    type: string;
    title: string;
    description: string;
    icon: string;
};

export const endorsementTypes = [
    {
        type: 'goodSportsmanship',
        title: 'Good Sportsmanship',
        description: 'Be a good sport and show respect to your teammates and opponents.',
        icon: 'handshake',
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
        icon: 'arm-flex',
    },
];

export const regroupValues = ['Honesty', 'Integrity', 'Respect', 'Teamwork', 'Communication'];

export const regroupQuizValues = [
    'Honesty',
    'Superiority',
    'Integrity',
    'Respect',
    'Power',
    'Teamwork',
    'Assertiveness',
    'Communication',
];
