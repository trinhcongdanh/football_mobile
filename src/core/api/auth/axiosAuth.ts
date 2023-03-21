import { AUTH_URL } from '@football/core/api/auth/config';
import axios from 'axios';

export const axiosAuth = axios.create({
    baseURL: AUTH_URL,
});

axiosAuth.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
});

axiosAuth.interceptors.response.use(
    response => {
        if (response.config.responseType === 'document') {
            console.log('Response', response.data);
            return response.data;
        }

        return response;
    },
    error => {
        throw error;
    }
);
