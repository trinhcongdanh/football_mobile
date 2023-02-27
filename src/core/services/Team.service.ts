import MongoDBService from '@football/core/services/mongoDB.service';

class TeamService extends MongoDBService {
    constructor() {
        super('team');
    }
}

export default new TeamService();
