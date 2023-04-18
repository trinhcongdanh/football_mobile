import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ILeaguesAverageProps } from './LeaguesAverage.type';

export const useViewModel = ({ data }: ILeaguesAverageProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listAverages = [
        {
            id: 1,
            category: t('statistics.leagues.avg_game_goals'),
            avgGame: data.league_avgs.avg_game_goals,
            avgRound: data.league_avgs.avg_round_goals,
        },
        {
            id: 2,
            category: t('statistics.leagues.avg_game_red_cards'),
            avgGame: data.league_avgs.avg_game_red_cards,
            avgRound: data.league_avgs.avg_round_red_cards,
        },
        {
            id: 3,
            category: t('statistics.leagues.avg_game_yellow_cards'),
            avgGame: data.league_avgs.avg_game_yellow_cards,
            avgRound: data.league_avgs.avg_round_yellow_cards,
        },
    ];

    return {
        t,
        listAverages,
    };
};
