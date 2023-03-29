import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState, useCallback } from 'react';
import { AppImages } from '@football/app/assets/images';
import { IInstagramProps } from '@football/app/screens/football-home/layouts/Instagram/Instagram.type';
import { Linking, Alert } from 'react-native';
export const useViewModel = ({}: IInstagramProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const data = [
        { id: 1, img: AppImages.img_squad },
        { id: 2, img: AppImages.img_squad },
        { id: 3, img: AppImages.img_squad },
        { id: 4, img: AppImages.img_squad },
    ];

    const openInstagram = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL('instagram://user?username=isr.fa');

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL('instagram://user?username=isr.fa');
        } else {
            Alert.alert(`Can't open the link`);
        }
    }, []);

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
        openInstagram,
    };
};
