import axios from 'axios';
import queryString from 'query-string';
import { URL_SERVER } from './config';

export const axiosClient = axios.create({
    baseURL: URL_SERVER,
    headers: {
        'content-type': 'application/json',
        // Authorization: `Bearer ${token}`,
    },
    paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
    response => {
        if (response.data) {
            return response.data;
        }
        return response;
    },
    error => {
        throw error;
    }
);
