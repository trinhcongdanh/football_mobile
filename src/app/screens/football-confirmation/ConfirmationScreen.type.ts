import { ScreenName } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type IConfirmationScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenName.ConfirmationPage>;
};
