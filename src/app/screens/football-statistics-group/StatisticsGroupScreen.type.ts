import { ScreenName } from '@football/app/utils/constants/enum';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type IStatisticsGroupScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<any, ScreenName.StatisticsGroupPage>;
};

export enum TeamGoalKickersListType {
    GoalKickersLeague,
    GoalKickersNationalCup,
    GoalKickersTotoCup,
    YellowCardsTotoCup,
    YellowCardsLeague,
    RedCards,
}
