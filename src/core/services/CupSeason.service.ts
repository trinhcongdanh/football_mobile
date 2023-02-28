import { CupSeasonQueryKey } from '@football/app/utils/constants/enum';
import { CupSeasonsModelResponse } from '@football/core/models/CupSeasonModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class CupSeasonService extends MongoDBService {
    constructor() {
        super('cup_season');
    }
}

const cupSeasonService = new CupSeasonService();

export const useCupSeasons = (cupId: string) => {
    return useQuery(`${CupSeasonQueryKey.GetCupSeason}-${cupId}`, () =>
        cupSeasonService.findByFilter<CupSeasonsModelResponse>({
            cup_id: cupId,
        })
    );
};

export default cupSeasonService;
