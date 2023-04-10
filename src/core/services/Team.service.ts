import { TeamModelResponse } from '@football/core/models/TeamModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { Result } from '@football/core/services/axios.service';

class TeamService extends MongoDBService {
    constructor() {
        super('team');
    }

    findAllFavTeam(sortBy?: any): Promise<Result<TeamModelResponse>> {
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter: { name_en: { $ne: null } },
            limit: 100,
            sort: sortBy,
        });
    }

    async searchFavTeam(searchText: string, sortBy?: any): Promise<Result<TeamModelResponse>> {
        const filter = {
            search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
            name_en: { $ne: null },
        };
        return this.find({ filter, limit: 100, sort: sortBy });
    }
}

export default new TeamService();
