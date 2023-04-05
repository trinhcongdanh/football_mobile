/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_KEY, BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { getDeepKeys } from '@football/core/helpers/util';
import AxiosService, { Result } from '@football/core/services/axios.service';
import { AxiosRequestConfig } from 'axios';
import queryString from 'query-string';

const axiosConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        'api-key': API_KEY,
    },
    paramsSerializer: (params: any) => queryString.stringify(params),
};
export interface MongoDBFindConfig {
    filter: object;
    limit?: number;
}
class MongoDBService {
    httpClient: AxiosService;

    collection: string;

    dbConfig: any;

    constructor(collection: string) {
        this.httpClient = new AxiosService(axiosConfig);
        this.collection = collection;
        this.dbConfig = {
            dataSource: DATA_SOURCE,
            database: DB,
            collection,
        };
    }

    findAll<T = any>(): Promise<Result<T>> {
        return this.httpClient.post('/find', { ...this.dbConfig }).then((response: any) => {
            const documents = response[1]?.data?.documents;
            // if (documents?.length) {
            //     console.log(`keysOfProps ${this.collection}`, getDeepKeys(documents[0]));
            // }
            return response;
        });
    }

    findByOId<T = any>(oid: string): Promise<Result<T>> {
        return this.httpClient
            .post('/find', { ...this.dbConfig, filter: { _id: { $oid: oid } } })
            .then((response: any) => {
                const documents = response[1]?.data?.documents;
                // if (documents?.length) {
                //     console.log(`keysOfProps ${this.collection}`, getDeepKeys(documents[0]));
                // }
                return response;
            });
    }

    findByFilter<T = any>(filter: any): Promise<Result<T>> {
        return this.httpClient.post('/find', { ...this.dbConfig, filter }).then((response: any) => {
            const documents = response[1]?.data?.documents;
            // if (documents?.length) {
            //     console.log(`keysOfProps ${this.collection}`, getDeepKeys(documents[0]));
            // }
            return response;
        });
    }

    search<T = any>(searchText: string, searchProp?: string): Promise<Result<T>> {
        const searchProperty = searchProp || 'search_terms';
        const searchQuery = {};
        searchQuery[`${searchProperty}`] = { $regex: `.*${searchText}.*`, $options: 'i' };
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter: searchQuery,
        });
    }

    find<TFind extends MongoDBFindConfig = MongoDBFindConfig, TResult = any>(
        config: TFind
    ): Promise<Result<TResult>> {
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            ...config,
        });
    }

    // findCup<T = any>(config: any): Promise<Result<T>> {
    //     console.log('Config find cups:', config);
    //     return this.httpClient.post('/find', {
    //         ...this.dbConfig,
    //         filter: config,
    //     });
    // }
}

export default MongoDBService;
