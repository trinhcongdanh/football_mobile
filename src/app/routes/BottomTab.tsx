import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constants/enum';
import {
    DataCoachScreen,
    DataPlayerScreen,
    GobletScreen,
    HistoryScreen,
    LeaguesScreen,
    VideoScreen,
} from '../screens';
import { MyTabBar } from './bottom-tab/MyTabBar';

const Bottom = createBottomTabNavigator();

export const BottomTabStack = () => {
    return (
        <Bottom.Navigator
            initialRouteName={ScreenName.HomePage}
            screenOptions={{ headerShown: false }}
            tabBar={(props: any) => <MyTabBar {...props} />}
        >
            <Bottom.Screen name={ScreenName.DataCoachPage} component={DataCoachScreen} />
            <Bottom.Screen name={ScreenName.DataPlayerPage} component={DataPlayerScreen} />
            <Bottom.Screen name={ScreenName.HistoryPage} component={HistoryScreen} />
            <Bottom.Screen name={ScreenName.LeaguesPage} component={LeaguesScreen} />
            <Bottom.Screen name={ScreenName.GobletPage} component={GobletScreen} />
            <Bottom.Screen name={ScreenName.VideoPage} component={VideoScreen} />
        </Bottom.Navigator>
    );
};
