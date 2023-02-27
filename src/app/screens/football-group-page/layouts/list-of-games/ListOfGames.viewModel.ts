import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const handleDetailMatch = () => {
        navigate(ScreenName.MatchPage);
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };
    return {
        t,
        handleDetailMatch,
        handleStadium,
    };
};
