import { CupModel } from '@football/core/models/CupModelResponse';
import { CupSeasonCycleDetails } from '@football/core/models/CupSeasonModelResponse';

export type ICupAroundProps = {
    cyclesDetails: CupSeasonCycleDetails[];
    cup: CupModel;
};
