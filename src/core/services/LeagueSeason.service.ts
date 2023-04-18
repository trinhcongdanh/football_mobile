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

export const useLeagueSeasonsByName = (leagueId: string, name: string) => {
    return useQuery(`${LeagueSeasonQueryKey.GetLeagueSeason}-${leagueId}-${name}`, () =>
        leagueSeasonService.findByFilter<LeagueSeasonModelResponse>({
            league_id: leagueId,
            name,
        })
    );
};

export const useLeagueSeasonById = (leagueSeasonId: string) => {
    return useQuery(`${LeagueSeasonQueryKey.GetLeagueSeason}-byId-${leagueSeasonId}`, () =>
        leagueSeasonService.findByOId<LeagueSeasonModelResponse>(leagueSeasonId)
    );
};

export default leagueSeasonService;
