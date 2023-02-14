import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { ScreenName, ScreenStack } from '../utils/constants/enum';
import { MainStack } from './MainStack';
import { SideBar } from '@football/app/routes/side-bar/SideBar';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = ScreenName.OpeningPage;

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName={INITIAL_ROUTE}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'fade',
                animationTypeForReplace: 'push',
            }}
        >
            <RootStack.Screen name={ScreenStack.AuthStack} component={AuthStack} />
            <RootStack.Screen name={ScreenStack.MainStack} component={MainStack} />
        </RootStack.Navigator>
    );
};
