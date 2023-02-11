import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IGoalsNationalTeamScreenProps } from './GoalsNationalTeamScreen.type';

export const useViewModel = ({ navigation, route }: IGoalsNationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const listGames = [
        {
            id: 1,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            goal: 1,
        },
        {
            id: 2,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            goal: 1,
        },
        {
            id: 3,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            goal: 1,
        },
        {
            id: 4,
            date: '25/1/22',
            home: AppImages.img_albania,
            away: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            result: '3 : 0',
            goal: 1,
        },
    ];

    const handleDetailMatch = () => {
        navigate(ScreenName.PitchPage);
    };

    return {
        t,
        onGoBack,
        handleDetailMatch,
        listGames,
    };
};
