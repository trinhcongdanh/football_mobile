import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const [select, setSelect] = useState(0);

    const data = [
        {
            id: 1,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: '3 : 1',
            schedule: '17:57',
            isLive: true,
            date: '15.09.22',
            location: 'בלומפילד',
            tournaments: 'ליגת האומות',
            minute: "'45",
        },
        {
            id: 2,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: null,
            schedule: '17:57',
            isLive: false,
            date: '15.09.22',
            location: 'בלומפילד',
            tournaments: 'ליגת האומות',
            minute: null,
        },
        {
            id: 3,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: '3 : 1',
            schedule: '17:57',
            isLive: false,
            date: '15.09.22',
            location: 'בלומפילד',
            tournaments: 'ליגת האומות',
            minute: "'90",
        },
    ];

    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    const selectOption = (index: any) => {
        setSelect(index);
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
        options,
        select,
        setSelect,
        selectOption,
        handleStadium,
        handleDetailMatch,
    };
};
