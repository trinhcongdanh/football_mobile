import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IGameLiveProps } from '@football/app/screens/football-game-live/GameLive.type';
import { useCallback, useEffect } from 'react';
import { Alert, BackHandler, Linking } from 'react-native';

export const useViewModel = ({ navigation, route }: IGameLiveProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = () => {
        goBack();
        return true;
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const url: string = 'https://www.realmadrid.com/en/football';

    const onNavigateToLink = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return {
        t,
        onGoBack,
        onNavigateToLink,
        url,
    };
};
