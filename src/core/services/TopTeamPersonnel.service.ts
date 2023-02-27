import MongoDBService from '@football/core/services/mongoDB.service';

class TopTeamPersonnelService extends MongoDBService {
    constructor() {
        super('top_team_personnel');
    }
}

export default new TopTeamPersonnelService();
