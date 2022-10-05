import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens';
import { ScreenName } from '../utils/constants/enum';

const Auth = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={ScreenName.OpeningPage}
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name={ScreenName.OpeningPage} component={WelcomeScreen} />
        </Auth.Navigator>
    );
};
