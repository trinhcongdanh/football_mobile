import MongoDBService from '@football/core/services/mongoDB.service';

class LeagueSeasonService extends MongoDBService {
    constructor() {
        super('league_season');
    }
}

export default new LeagueSeasonService();
