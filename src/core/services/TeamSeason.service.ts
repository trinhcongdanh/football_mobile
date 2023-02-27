import MongoDBService from '@football/core/services/mongoDB.service';

class TeamSeasonService extends MongoDBService {
    constructor() {
        super('team_season');
    }
}

export default new TeamSeasonService();
