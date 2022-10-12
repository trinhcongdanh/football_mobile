import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../utils/constants/enum';
import { WelcomeScreen } from '../screens';
import { RegisterScreen } from '../screens/football-register/RegisterScreen';
import { ConnectScreen } from '../screens/football-connect/ConnectScreen';
import { VerifyScreen } from '../screens/football-verify/VerifyScreen';
import { SettingsScreen } from '../screens/football-settings/SettingsScreen';

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
        </Auth.Navigator>
    );
};
