import {
    LeagueModelResponse,
    LeagueTypeModelResponse,
} from '@football/core/models/LeagueModelResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';

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

export default new LeaguesService();
