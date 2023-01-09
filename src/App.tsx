import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import './app/i18n/EnStrings';
import { ThemeProvider } from 'react-native-elements';
import { I18nManager, View } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigator } from './app/routes/RootNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { appStyles } from './app/utils/constants/appStyles';
import { store, persistor } from './store/store';
import 'react-native-get-random-values';
import { useTranslation } from 'react-i18next';

const App = (props: any) => {
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage('heb');
        if (i18n.language === 'en') {
            I18nManager.forceRTL(false);
        } else {
            I18nManager.forceRTL(true);
        }
    }, [i18n, i18n.language]);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <NavigationContainer>
                        <View style={appStyles.flex}>
                            <RootNavigator />
                        </View>
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
