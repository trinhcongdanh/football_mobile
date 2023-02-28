import MongoDBService from '@football/core/services/mongoDB.service';

class HomeLayoutService extends MongoDBService {
    constructor() {
        super('homepage_layout');
    }
}

export default new HomeLayoutService();
