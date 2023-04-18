import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { IStatisticDetailsScreenProps } from './StatisticDetailsScreen.type';

export const useViewModel = ({ navigation, route }: IStatisticDetailsScreenProps) => {
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
