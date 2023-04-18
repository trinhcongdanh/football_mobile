import { LeagueTypeModelResponse } from '@football/core/models/LeagueModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class LeagueTypeService extends MongoDBService {
    constructor() {
        super('league_type');
    }
}

const leagueTypeService = new LeagueTypeService();

export const useLeagueTypes = () => {
    return useQuery(`get-leagues-types`, () =>
        leagueTypeService.findAll<LeagueTypeModelResponse>()
    );
};

export default leagueTypeService;
