import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IPlayGroundScreenProps } from '@football/app/screens/football-playground/PlayGroundScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { isGuessUser } from '@football/core/models/AvatarType.enum';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IPlayGroundScreenProps) => {
    const { navigate, goBack, navigateClearStack } = useAppNavigator();
    const { t } = useTranslation();
    const profileUser = useSelector((state: RootState) => state.getProfile);
    if (isGuessUser(profileUser)) {
        navigateClearStack(ScreenName.RegisterPage);
    }

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
