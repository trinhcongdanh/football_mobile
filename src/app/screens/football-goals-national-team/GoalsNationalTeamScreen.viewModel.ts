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
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'ליגת האומות של אופ"א 2022/23',
            red_card: 3,
            yellow_card: 3,
            goal: 3,
            completed: false,
        },
        {
            id: 2,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'ידידות',
            red_card: 3,
            yellow_card: 3,
            goal: 3,
            completed: true,
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
