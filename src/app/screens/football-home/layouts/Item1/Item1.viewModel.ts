import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateTeamDetails = (teamId: string) => {
        navigate(ScreenName.GroupPagePage, { teamId });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        handleStadium,
        handleDetailMatch,
        onNavigateTeamDetails,
    };
};
