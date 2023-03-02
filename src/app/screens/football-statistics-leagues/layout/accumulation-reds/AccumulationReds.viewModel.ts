import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { Card, LeagueSeasonStatModel } from '@football/core/models/LeagueSeasonStatModelResponse';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const handleSeeAll = (
        leagueSeasonStats: LeagueSeasonStatModel,
        data: Card[],
        title: string,
        name: string,
        team: string,
        result: string,
        ticket: string
    ) => {
        navigate(ScreenName.StatisticDetailsPage, {
            leagueSeasonStats,
            data,
            title,
            name,
            team,
            result,
            ticket,
        });
    };

    return {
        t,
        handleSeeAll,
    };
};
