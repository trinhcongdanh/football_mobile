/* eslint-disable @typescript-eslint/dot-notation */
import { Video } from '@football/app/components/video/Video';
import { AppConsumer, AppProvider } from '@football/core/api/contexts/AppProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, LogBox, Text, TextInput, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { TextInput as TextInputGH } from 'react-native-gesture-handler';
import 'react-native-get-random-values';
import Orientation from 'react-native-orientation-locker';
import { EventProvider } from 'react-native-outside-press';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './app/i18n/EnStrings';
import { RootNavigator } from './app/routes/RootNavigator';
import { appStyles } from './app/utils/constants/appStyles';
import { persistor, store } from './store/store';

TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;
TextInputGH.defaultProps = Text.defaultProps || {};
TextInputGH.defaultProps.allowFontScaling = false;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
});
LogBox.ignoreAllLogs(true);

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
            GetFCMToken();
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
                    global['notificationData'] = remoteMessage;
                }
            });
        messaging().onMessage(async remoteMessage => {
            console.log('Notification on froground state .....', remoteMessage);
        });
    };

    useEffect(() => {
        requestUserPermission();
        NotificationListener();
        Orientation.lockToPortrait();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <AppProvider {...props}>
                <AppConsumer>
                    {funcs => {
                        global.props = { ...funcs };
                        return (
                            <Provider store={store}>
                                <PersistGate loading={null} persistor={persistor}>
                                    <ThemeProvider>
                                        <NavigationContainer>
                                            <EventProvider style={{ flex: 1 }}>
                                                <View style={appStyles.flex}>
                                                    <RootNavigator />
                                                    <Video />
                                                </View>
                                            </EventProvider>
                                        </NavigationContainer>
                                    </ThemeProvider>
                                </PersistGate>
                            </Provider>
                        );
                    }}
                </AppConsumer>
            </AppProvider>
        </QueryClientProvider>
    );
};

export default App;
