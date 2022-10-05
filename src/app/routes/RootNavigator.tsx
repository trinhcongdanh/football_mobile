import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { ScreenName, ScreenStack } from '../utils/constants/enum';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = ScreenName.OpeningPage;

export const RootNavigator = () => {
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
};
