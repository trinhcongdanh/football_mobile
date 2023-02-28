import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import {
    AvgGameYellowCard,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const handleSeeAll = (
        leagueSeasonStats: LeagueSeasonStatModel,
        avgData: AvgGameYellowCard[],
        title: string
    ) => {
        navigate(ScreenName.StatisticDetailsPage, { leagueSeasonStats, avgData, title });
    };

    return {
        t,
        handleSeeAll,
    };
};
