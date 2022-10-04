import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashPage } from './app/screens/splash-screen/SplashScreen';
import './app/i18n/EnStrings';

const Stack = createNativeStackNavigator();

const App = (props: any) => {
    useLayoutEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={SplashPage}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
