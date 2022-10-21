import { ScreenTopTap } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ILeaguesGraduatesScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenTopTap.LeaguesGraduatesPage>;
};
