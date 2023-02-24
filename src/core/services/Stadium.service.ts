import MongoDBService from '@football/core/services/mongoDB.service';

class StadiumService extends MongoDBService {
    constructor() {
        super('stadium');
    }
}

export default new StadiumService();
