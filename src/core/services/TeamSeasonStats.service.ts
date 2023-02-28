import MongoDBService from '@football/core/services/mongoDB.service';

class TeamSeasonStatsService extends MongoDBService {
    constructor() {
        super('team_season_stats');
    }
}

export default new TeamSeasonStatsService();
