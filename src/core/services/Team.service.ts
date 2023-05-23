import { TeamModelResponse } from '@football/core/models/TeamModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { Result } from '@football/core/services/axios.service';
import { I18nManager } from 'react-native';

class TeamService extends MongoDBService {
    constructor() {
        super('team');
    }

    findAllFavTeam(sortBy?: any): Promise<Result<TeamModelResponse>> {
        const filter = {
            league_id: { $ne: null },
            name_en: {},
        };
        if (!I18nManager.isRTL) {
            filter.name_en = { $ne: null };
        }
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter,
            limit: 100,
            sort: sortBy,
        });
    }

    async searchFavTeam(searchText: string, sortBy?: any): Promise<Result<TeamModelResponse>> {
        const filter = {
            search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
            league_id: { $ne: null },
            name_en: {},
        };
        if (!I18nManager.isRTL) {
            filter.name_en = { $ne: null };
        }
        return this.find({ filter, limit: 100, sort: sortBy });
    }
}

export default new TeamService();
