import MongoDBService from '@football/core/services/mongoDB.service';

class CampaignService extends MongoDBService {
    constructor() {
        super('campaign');
    }
}

export default new CampaignService();
