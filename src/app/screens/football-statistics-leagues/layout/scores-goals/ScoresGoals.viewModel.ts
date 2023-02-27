import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import {
    GoalKicker,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const handleSeeAll = (leagueSeasonStats: LeagueSeasonStatModel, data: GoalKicker[]) => {
        navigate(ScreenName.StatisticDetailsPage, { data, leagueSeasonStats });
    };

    return {
        t,
        handleSeeAll,
    };
};
