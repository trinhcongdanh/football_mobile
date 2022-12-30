import React, { useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
import './app/i18n/EnStrings';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigator } from './app/routes/RootNavigator';
import { appStyles } from './app/utils/constants/appStyles';
import { store } from './store/store';

const App = (props: any) => {
    // useLayoutEffect(() => {
    //     SplashScreen.hide();
    // }, []);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <NavigationContainer>
                    <View style={appStyles.flex}>
                        <RootNavigator />
                    </View>
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
