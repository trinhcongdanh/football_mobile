import MongoDBService from '@football/core/services/mongoDB.service';

class PlayerService extends MongoDBService {
    constructor() {
        super('player');
    }
}

export default new PlayerService();
