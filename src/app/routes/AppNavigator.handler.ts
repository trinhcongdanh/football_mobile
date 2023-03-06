import { ScreenName } from '@football/app/utils/constants/enum';
import { ParamListBase, StackActions, useNavigation } from '@react-navigation/native';

// export type NavigationParam = ParamListBase & {
//     previous_screen: ScreenName;
// };

export const useAppNavigator = () => {
    const navigation = useNavigation();

    const navigate = (name: string, params?: any) => {
        navigation.dispatch(StackActions.push(name, params));
    };

    const replace = (name: string, params?: any) => {
        navigation.dispatch(StackActions.replace(name, params));
    };

    const pop = () => {
        navigation.dispatch(StackActions.pop());
    };

    const popToTop = () => {
        navigation.dispatch(StackActions.popToTop());
    };

    const navigateClearStack = (name: string) => {
        navigation.reset({
            index: 0,
            routes: [{ name }],
        });
    };

    const goBack = () => {
        navigation.goBack();
    };

    return {
        navigate,
        replace,
        pop,
        popToTop,
        goBack,
        navigateClearStack,
    };
};
