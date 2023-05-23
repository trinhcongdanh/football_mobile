import { Alert, Linking } from 'react-native';
import { IMagazineProps } from '@football/app/screens/football-home/layouts/Magazine/Magazine.type';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ homePage }: IMagazineProps) => {
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(homePage.magazine.length).fill('');

    const onClickImage = useCallback(async (url: string) => {
        try {
            await Linking.openURL(url);
        } catch (error) {
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
