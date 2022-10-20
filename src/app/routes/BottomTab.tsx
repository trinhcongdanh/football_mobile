import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenName } from '../utils/constants/enum';
import { DataPlayerScreen, HomeScreen, MatchScreen, TeamSquadScreen } from '../screens';
import { SettingsScreen } from '../screens/football-settings/SettingsScreen';
import { MyTabBar } from './bottom-tab/MyTabBar';

const Bottom = createBottomTabNavigator();

export const BottomTabStack = () => {
    return (
        <Bottom.Navigator
            initialRouteName={ScreenName.HomePage}
            screenOptions={{ headerShown: false }}
            tabBar={props => <MyTabBar {...props} />}
        >
            <Bottom.Screen name={ScreenName.HomePage} component={HomeScreen} />
            <Bottom.Screen name={ScreenName.SettingsPage} component={SettingsScreen} />
            <Bottom.Screen name={ScreenName.TeamSquadPage} component={TeamSquadScreen} />
            <Bottom.Screen name={ScreenName.MatchPage} component={MatchScreen} />
            <Bottom.Screen name={ScreenName.DataPlayerPage} component={DataPlayerScreen} />
        </Bottom.Navigator>
    );
};
