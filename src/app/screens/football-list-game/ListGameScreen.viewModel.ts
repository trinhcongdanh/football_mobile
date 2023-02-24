import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IListGameScreenProps } from '@football/app/screens/football-list-game/ListGameScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ navigation, route }: IListGameScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateGame = () => {
        navigate(ScreenName.MatchPage);
    };

    const onNavigateStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    return {
        t,
        onGoBack,
        onNavigateGame,
        onNavigateStadium,
    };
};
