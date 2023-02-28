import MongoDBService from '@football/core/services/mongoDB.service';

class HomePageService extends MongoDBService {
    constructor() {
        super('homepage');
    }
}

export default new HomePageService();
