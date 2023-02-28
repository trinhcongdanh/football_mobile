import MongoDBService from '@football/core/services/mongoDB.service';

class GeneralVodService extends MongoDBService {
    constructor() {
        super('general_vod');
    }
}

export default new GeneralVodService();
