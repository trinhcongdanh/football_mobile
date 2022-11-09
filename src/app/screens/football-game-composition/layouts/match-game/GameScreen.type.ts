import { ScreenTopTap } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type IGameScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenTopTap.GamePage>;
};
