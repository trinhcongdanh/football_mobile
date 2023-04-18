import MongoDBService from '@football/core/services/mongoDB.service';

class TeamPersonnelService extends MongoDBService {
    constructor() {
        super('team_personnel');
    }
}

export default new TeamPersonnelService();
