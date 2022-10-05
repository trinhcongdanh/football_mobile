import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SplashPage } from './app/screens/splash-screen/SplashScreen';
import './app/i18n/EnStrings';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';
import { RootNavigator } from './app/routes/RootNavigator';

const Stack = createNativeStackNavigator();

const App = (props: any) => {
    useLayoutEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <ThemeProvider>
            <NavigationContainer>
                <View style={{ flex: 1 }}>
                    <RootNavigator />
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
