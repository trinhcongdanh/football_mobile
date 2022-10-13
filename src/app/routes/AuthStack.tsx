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
        </Auth.Navigator>
    );
};
