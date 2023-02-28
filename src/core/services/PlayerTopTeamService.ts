import MongoDBService from '@football/core/services/mongoDB.service';

class PlayerTopTeamService extends MongoDBService {
    constructor() {
        super('player_top_team_goals');
    }
}

export default new PlayerTopTeamService();
