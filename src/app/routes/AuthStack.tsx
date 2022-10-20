import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../utils/constants/enum';
import { RegScreen } from '../screens/football-reg/RegScreen';
import { WelcomeScreen } from '../screens/football-welcome/WelcomeScreen';
import { RegisterScreen } from '../screens/football-register/RegisterScreen';
import { ConnectScreen } from '../screens/football-connect/ConnectScreen';
import { VerifyScreen } from '../screens/football-verify/VerifyScreen';
import { SettingsScreen } from '../screens/football-settings/SettingsScreen';
import { TeamScreen } from '../screens/football-team/TeamScreen';
import { TeamSquadScreen } from '../screens/football-team-squad/TeamSquadScreen';
import { MatchScreen } from '../screens/football-match/MatchScreen';
import { HomeScreen } from '../screens';
import { HistoryScreen } from '../screens/football-history/HistoryScreen';
import { DataPlayerScreen } from '../screens/football-data-player/DataPlayerScreen';
import { DataCoachScreen } from '../screens/football-data-coach/DataCoachScreen';

const Auth = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={ScreenName.OpeningPage}
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name={ScreenName.OpeningPage} component={WelcomeScreen} />
            <Auth.Screen name={ScreenName.ConnectPage} component={ConnectScreen} />
            <Auth.Screen name={ScreenName.RegisterPage} component={RegisterScreen} />
            <Auth.Screen name={ScreenName.VerifyPage} component={VerifyScreen} />
            <Auth.Screen name={ScreenName.SettingsPage} component={SettingsScreen} />
            <Auth.Screen name={ScreenName.RegPage} component={RegScreen} />
            <Auth.Screen name={ScreenName.TeamPage} component={TeamScreen} />
            <Auth.Screen name={ScreenName.TeamSquadPage} component={TeamSquadScreen} />
            <Auth.Screen name={ScreenName.MatchPage} component={MatchScreen} />
            <Auth.Screen name={ScreenName.HomePage} component={HomeScreen} />
            <Auth.Screen name={ScreenName.DataPlayerPage} component={DataPlayerScreen} />
            <Auth.Screen name={ScreenName.DataCoachPage} component={DataCoachScreen} />
            <Auth.Screen name={ScreenName.HistoryPage} component={HistoryScreen} />
        </Auth.Navigator>
    );
};
