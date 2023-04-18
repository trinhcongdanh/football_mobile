import { CupQueryKey } from '@football/app/utils/constants/enum';
import { CupsModelResponse } from '@football/core/models/CupModelResponse';
import { Result } from '@football/core/services/axios.service';
import MongoDBService from '@football/core/services/mongoDB.service';
import { useQuery } from 'react-query';

class CupsService extends MongoDBService {
    constructor() {
        super('cup');
    }

    getCupsByTypes(type: number): Promise<Result<CupsModelResponse>> {
        return this.findByFilter({
            type,
        });
    }

    searchCups(searchText: string, type: number): Promise<Result<CupsModelResponse>> {
        const filter = { search_terms: { $regex: `.*${searchText}.*`, $options: 'i' }, type: type };
        return this.find({ filter });
    }
}

const cupsService = new CupsService();

export const useCups = (type: number) => {
    return useQuery(`${CupQueryKey.GetCups}-${type}`, () => cupsService.getCupsByTypes(type));
};

export default cupsService;
