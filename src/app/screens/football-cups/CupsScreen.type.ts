import { CupHolder, CupModel } from '@football/core/models/CupModelResponse';
import { CupSeasonCycleDetails } from '@football/core/models/CupSeasonModelResponse';
import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ICupsScreenProps = {
    navigation?: NavigationProp<any>;
    route?: RouteProp<
        {
            params: {
                cupHolders: CupHolder[];
                cup: CupModel;
                cyclesDetails: CupSeasonCycleDetails[];
            };
        },
        'params'
    >;
};
