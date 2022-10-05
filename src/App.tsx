import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import './app/i18n/EnStrings';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';
import { RootNavigator } from './app/routes/RootNavigator';
import { appStyles } from './app/utils/constants/appStyles';

const App = (props: any) => {
    useLayoutEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <ThemeProvider>
            <NavigationContainer>
                <View style={appStyles.flex}>
                    <RootNavigator />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
