import { LeagueQueryKey } from '@football/app/utils/constants/enum';
import {
    LeagueModelResponse,
    LeagueTypeModelResponse,
} from '@football/core/models/LeagueModelResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class LeaguesService extends MongoDBService {
    constructor() {
        super('league');
    }

    getTypes(): Promise<Result<LeagueTypeModelResponse>> {
        return this.findAll();
    }

    searchLeague(searchText: string): Promise<Result<LeagueModelResponse>> {
        return this.search(searchText);
    }
}

const leaguesService = new LeaguesService();

export const useLeagueTypes = () => {
    return useQuery(LeagueQueryKey.GetLeagueTypes, () => leaguesService.getTypes());
};

export default leaguesService;
