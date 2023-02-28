import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { ICupsScreenProps } from './CupsScreen.type';

export const useViewModel = ({ route }: ICupsScreenProps) => {
    const { goBack } = useAppNavigator();
    const { getTranslationText } = useTranslationText();
    const { cupHolders, cup, cyclesDetails } = route.params;
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };

    return {
        t,
        onGoBack,
        cupHolders,
        getTranslationText,
        cup,
        cyclesDetails,
    };
};
