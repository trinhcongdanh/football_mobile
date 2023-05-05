import { CampaignsResponse } from '@football/core/models/CampaignsResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';

class CampaignService extends MongoDBService {
    constructor() {
        super('campaign');
    }

    findAllCampaign(sortBy?: any): Promise<Result<CampaignsResponse>> {
        const filter = {
            top_team_id: { $ne: null },
        };
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter,
        });
    }
}

export default new CampaignService();
