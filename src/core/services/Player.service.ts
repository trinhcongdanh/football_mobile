import { PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import MongoDBService from '@football/core/services/mongoDB.service';
import { Result } from '@football/core/services/axios.service';

class PlayerService extends MongoDBService {
    constructor() {
        super('player');
    }

    findAllFavPlayer(sortBy?: any): Promise<Result<PlayersModelResponse>> {
        return this.httpClient.post('/find', { ...this.dbConfig, limit: 100, sort: sortBy });
    }

    async searchFavPlayer(searchText: string, sortBy?: any): Promise<Result<PlayersModelResponse>> {
        const filter = { search_terms: { $regex: `.*${searchText}.*`, $options: 'i' } };
        return await this.find({ filter, limit: 100, sort: sortBy });
    }
}

export default new PlayerService();
