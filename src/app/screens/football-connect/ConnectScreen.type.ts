import { ScreenName } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type IConnectScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenName.ConnectPage>;
};
