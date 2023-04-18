import MongoDBService from '@football/core/services/mongoDB.service';

class GameService extends MongoDBService {
    constructor() {
        super('game');
    }
}

export default new GameService();
