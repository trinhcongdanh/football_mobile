import MongoDBService from '@football/core/services/mongoDB.service';

class LeagueTypeService extends MongoDBService {
    constructor() {
        super('league_type');
    }
}

export default new LeagueTypeService();
