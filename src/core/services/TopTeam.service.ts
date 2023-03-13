import { TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';

class TopTeamService extends MongoDBService {
    constructor() {
        super('top_team');
    }
    findAllFavTopTeam(): Promise<Result<TopTeamModelResponse>> {
        return this.httpClient.post('/find', { ...this.dbConfig, limit: 100 });
    }
}

export default new TopTeamService();
