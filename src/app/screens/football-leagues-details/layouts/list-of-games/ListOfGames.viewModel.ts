import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IListOfGamesProps } from './ListOfGames.type';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = ({ games }: IListOfGamesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listGames = games;

    const onNavigateGamePersonnel = () => {
        navigate(ScreenName.MatchPage);
    };

    const onNavigateStadium = () => {
        navigate(ScreenName.PitchPage);
    };
    return {
        t,
        listGames,
        onNavigateGamePersonnel,
        onNavigateStadium,
    };
};
