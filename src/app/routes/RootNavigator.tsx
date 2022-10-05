import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { ScreenName, ScreenStack } from '../utils/constants/enum';
// import {AuthStack} from './AuthStack';
// import {Auth, Main} from '../utils/BaseValues';
// import {HomeStack} from './HomeStack';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = ScreenName.OpeningPage;

export function RootNavigator() {
    return (
        <RootStack.Navigator
            initialRouteName={INITIAL_ROUTE}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <RootStack.Screen name={ScreenStack.AuthStack} component={AuthStack} />
        </RootStack.Navigator>
    );
}
