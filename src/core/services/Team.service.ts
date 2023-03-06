import { TeamModelResponse } from '@football/core/models/TeamModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { Result } from '@football/core/services/axios.service';

class TeamService extends MongoDBService {
    constructor() {
        super('team');
    }

    searchFavTeam(searchText: string, limit = 100): Promise<Result<TeamModelResponse>> {
        const filter = { limit, search_terms: { $regex: `.*${searchText}.*`, $options: 'i' } };
        return this.filter(filter);
    }
}

export default new TeamService();
