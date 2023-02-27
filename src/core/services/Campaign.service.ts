import MongoDBService from '@football/core/services/mongoDB.service';

class CampaignService extends MongoDBService {
    constructor() {
        super('team_campaign');
    }
}

export default new CampaignService();
