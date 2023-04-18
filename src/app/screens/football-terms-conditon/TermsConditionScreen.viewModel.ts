import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ITermsConditionScreenProps } from '@football/app/screens/football-terms-conditon/TermsConditionScreen.type';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export const useViewModel = ({ navigation, route }: ITermsConditionScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = () => {
        goBack();
        return true;
    };
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    return {
        t,
        onGoBack,
    };
};
