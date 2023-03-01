import { SplashAnimationKey } from '@football/app/utils/constants/enum';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class SplashAnimationService extends MongoDBService {
    constructor() {
        super('splash_animation');
    }
}

const splashAnimationService = new SplashAnimationService();

export const useSplashAnimations = () => {
    return useQuery(`${SplashAnimationKey.GetSplashAnimations}`, () =>
        splashAnimationService.findAll()
    );
};

export default SplashAnimationService;
