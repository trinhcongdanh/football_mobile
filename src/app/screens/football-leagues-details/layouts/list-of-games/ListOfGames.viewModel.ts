import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { IListOfGamesProps } from './ListOfGames.type';

export const useViewModel = ({ games }: IListOfGamesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listGames = games;

    const onNavigateGamePersonnel = (gameId: string) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    return {
        t,
        listGames,
        onNavigateGamePersonnel,
        onNavigateStadium,
    };
};
