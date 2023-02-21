import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const useAppNavigation = () => {
    const navigation = useNavigation();
    const { goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return {
        navigation,
        onGoBack,
        openDrawer,
    };
};
