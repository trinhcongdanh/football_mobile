import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ITermsConditionScreenProps } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.type';

export const useViewModel = ({ navigation, route }: ITermsConditionScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return {
        t,
        onGoBack,
    };
};
