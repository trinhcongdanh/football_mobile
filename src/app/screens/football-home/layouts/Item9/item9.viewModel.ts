import { Alert, Linking } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IItem9Props } from '@football/app/screens/football-home/layouts/Item9/Item9.type';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ homePage }: IItem9Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(homePage.magazine.length).fill('');

    const onClickImage = useCallback(async (url: string) => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, []);

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        onClickImage,
    };
};
