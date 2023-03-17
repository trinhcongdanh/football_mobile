import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from '../utils/constants/enum';
import { SettingsScreen } from '../screens/football-settings/SettingsScreen';

const Main = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Main.Navigator
            initialRouteName={ScreenName.SettingsPage}
            screenOptions={{ headerShown: false, animationTypeForReplace: 'pop' }}
        >
            <Main.Screen name={ScreenName.SettingsPage} component={SettingsScreen} />
        </Main.Navigator>
    );
};
