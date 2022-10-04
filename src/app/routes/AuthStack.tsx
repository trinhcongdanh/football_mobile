import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashPage } from '../screens';
import { ScreenName } from '../utils/constants/enum';

const Auth = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Auth.Navigator
            initialRouteName={ScreenName.SplashPage}
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name={ScreenName.SplashPage} component={SplashPage} />
        </Auth.Navigator>
    );
};
