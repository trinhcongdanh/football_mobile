import MongoDBService from '@football/core/services/mongoDB.service';

class TopTeamService extends MongoDBService {
    constructor() {
        super('top_team');
    }
}

export default new TopTeamService();
