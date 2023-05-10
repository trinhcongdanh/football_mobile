import { CampaignsResponse } from '@football/core/models/CampaignsResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';

class CampaignService extends MongoDBService {
    constructor() {
        super('campaign');
    }

    findAllCampaign(id?: any): Promise<Result<CampaignsResponse>> {
        const filter = {
            top_team_id: '63a192148b29e970240143f0',
        };
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter,
        });
    }
}

export default new CampaignService();
