import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, I18nManager, ScrollView, View } from 'react-native';
import { Card, ThemeProvider } from 'react-native-elements';
import 'react-native-get-random-values';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './app/i18n/EnStrings';
import 'react-native-gesture-handler';
import { RootNavigator } from './app/routes/RootNavigator';
import { appStyles } from './app/utils/constants/appStyles';
import { persistor, store } from './store/store';
import PushNotification from 'react-native-push-notification';
import { Video } from '@football/app/components/video/Video';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log('Authorization status:', authStatus);
            // GetFCMToken();
        }
    };

    const GetFCMToken = async () => {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        console.log(fcmToken, 'old token');
        if (!fcmToken) {
            try {
                const fcmToken = await messaging().getToken();
                if (fcmToken) {
                    console.log(fcmToken, 'new token');

                    await AsyncStorage.setItem('fcmToken', fcmToken);
                } else {
                }
            } catch (error) {
                console.log(error, 'Error in fcmToken');
            }
        }
    };

    const NotificationListener = () => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification
            );
        });
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification
                    );
                }
            });
        messaging().onMessage(async remoteMessage => {
            console.log('Notification on froground state .....', remoteMessage);
        });
    };

    useEffect(() => {
        requestUserPermission();
        // NotificationListener();
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <NavigationContainer>
                        <View style={appStyles.flex}>
                            <RootNavigator />
                            <Video />
                        </View>
                    </NavigationContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
