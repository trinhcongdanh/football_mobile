import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import {
    ChampionshipHistory,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const handleSeeAll = (
        leagueSeasonStats: LeagueSeasonStatModel,
        hisData: ChampionshipHistory[]
    ) => {
        navigate(ScreenName.StatisticDetailsPage, { leagueSeasonStats, hisData });
    };

    return {
        t,
        handleSeeAll,
    };
};
