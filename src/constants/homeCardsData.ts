import { HomeStackParams } from '../navigation/BottomTabs';

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
        route: 'RewardsStore',
    },
];
