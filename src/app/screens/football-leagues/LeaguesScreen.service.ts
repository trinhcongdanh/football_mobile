import {
    LeagueModelResponse,
    LeagueTypeModelResponse,
} from '@football/core/models/LeagueModelResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';

class LeagueDetailService {
    mongoClient: MongoDBService;

    collection = 'league';

    constructor() {
        this.mongoClient = new MongoDBService(this.collection);
    }

    getTypes(): Promise<Result<LeagueTypeModelResponse>> {
        return this.mongoClient.findAll();
    }

    search(searchText: string): Promise<Result<LeagueModelResponse>> {
        return this.mongoClient.search(searchText);
    }
}

export default new LeagueDetailService();
