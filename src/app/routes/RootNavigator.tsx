import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { ScreenName } from '../utils/constants/enum';
// import {AuthStack} from './AuthStack';
// import {Auth, Main} from '../utils/BaseValues';
// import {HomeStack} from './HomeStack';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = ScreenName.SplashPage;

export function RootNavigator() {
    return (
        <RootStack.Navigator
            initialRouteName={INITIAL_ROUTE}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <RootStack.Screen name={ScreenName.SplashPage} component={AuthStack} />
        </RootStack.Navigator>
    );
}
