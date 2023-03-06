/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_KEY, BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
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
        return this.httpClient.post('/find', { ...this.dbConfig });
    }

    findByOId<T = any>(oid: string): Promise<Result<T>> {
        return this.httpClient.post('/find', { ...this.dbConfig, filter: { _id: { $oid: oid } } });
    }

    findByFilter<T = any>(filter: any): Promise<Result<T>> {
        return this.httpClient.post('/find', { ...this.dbConfig, filter });
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

    filter<T = any>(filter: any): Promise<Result<T>> {
        return this.httpClient.post('/find', {
            ...this.dbConfig,
            filter,
        });
    }
}

export default MongoDBService;
