import { LeagueSeasonQueryKey } from '@football/app/utils/constants/enum';
import { LeagueSeasonModelResponse } from '@football/core/models/LeagueSeasonModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class LeagueSeasonService extends MongoDBService {
    constructor() {
        super('league_season');
    }
}

const leagueSeasonService = new LeagueSeasonService();

export const useLeagueSeasons = (leagueId: any) => {
    return useQuery(`${LeagueSeasonQueryKey.GetLeagueSeason}-${leagueId}`, () =>
        leagueSeasonService.findByFilter<LeagueSeasonModelResponse>({
            league_id: leagueId,
        })
    );
};

export default leagueSeasonService;
