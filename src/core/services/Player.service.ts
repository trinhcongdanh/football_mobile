import { PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { Result } from '@football/core/services/axios.service';
import { I18nManager } from 'react-native';

class PlayerService extends MongoDBService {
    constructor() {
        super('player');
    }

    findAllFavPlayer(sortBy?: any): Promise<Result<PlayersModelResponse>> {
        const filter = { team: { $exists: true, $ne: null } };
        if (!I18nManager.isRTL) {
            filter.name_en = { $ne: ' ' };
        }
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter,
            limit: 100,
            sort: sortBy,
        });
    }

    async searchFavPlayer(searchText: string, sortBy?: any): Promise<Result<PlayersModelResponse>> {
        const filter = {
            search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
            team: { $exists: true, $ne: null },
        };
        if (!I18nManager.isRTL) {
            filter.name_en = { $ne: ' ' };
        }
        return this.find({ filter, limit: 100, sort: sortBy });
    }
}

export default new PlayerService();
