import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IAwardScreenProps } from '@football/app/screens/football-award/AwardScreen.type';

export const useViewModel = ({ navigation, route }: IAwardScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const handleConfirmation = () => {
        navigate(ScreenName.ConfirmationPage);
    };

    return {
        t,
        onGoBack,
        handleConfirmation,
    };
};
