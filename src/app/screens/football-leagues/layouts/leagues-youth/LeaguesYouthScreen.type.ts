import { ScreenTopTap } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ILeaguesYouthScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenTopTap.LeaguesYouthPage>;
};
