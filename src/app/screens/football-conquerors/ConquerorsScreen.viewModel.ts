import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { AppImages } from '@football/app/assets/images';
import { IConquerorsScreenProps } from './ConquerorsScreen.type';

export const useViewModel = ({ navigation, route }: IConquerorsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const listConquerors = [
        { id: 1, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 2, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 3, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 4, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 5, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 6, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 7, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
        { id: 8, name: 'שון גולדברג', number: '31', avt: AppImages.img_avt_player },
    ];
    const onNavigateDataPlayer = () => {
        navigate(ScreenName.DataPlayerPage);
    };
    return {
        t,
        onGoBack,
        listConquerors,
        onNavigateDataPlayer,
    };
};
