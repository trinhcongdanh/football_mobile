import { CupModel } from '@football/core/models/CupModelResponse';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type IStateCupScreenProps = {
    navigation?: NavigationProp<any>;
    route?: RouteProp<{ params: { cup: CupModel } }, 'params'>;
};
