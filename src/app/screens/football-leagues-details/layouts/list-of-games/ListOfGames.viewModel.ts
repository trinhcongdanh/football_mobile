import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IListOfGamesProps } from './ListOfGames.type';

export const useViewModel = ({ games }: IListOfGamesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listGames = games;
    return {
        t,
        listGames,
    };
};
