import MongoDBService from '@football/core/services/mongoDB.service';

class LeagueSeasonStatsService extends MongoDBService {
    constructor() {
        super('league_season_stats');
    }
}

export default new LeagueSeasonStatsService();
