import MongoDBService from '@football/core/services/mongoDB.service';

class CoachService extends MongoDBService {
    constructor() {
        super('coach');
    }
}

export default new CoachService();
