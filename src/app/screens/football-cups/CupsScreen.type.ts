import { CupHolder, CupModel } from '@football/core/models/CupModelResponse';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ICupsScreenProps = {
    navigation?: NavigationProp<any>;
    route: RouteProp<{ params: { cupHolders: CupHolder[]; cup: CupModel } }, 'params'>;
};
