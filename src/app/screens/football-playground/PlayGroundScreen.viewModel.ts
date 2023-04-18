import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IPlayGroundScreenProps } from '@football/app/screens/football-playground/PlayGroundScreen.type';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ navigation, route }: IPlayGroundScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };
    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

    return {
        t,
        onGoBack,
        onShowSideMenu,
    };
};
