import { AUTH_URL } from '@football/core/api/auth/config';
import axios from 'axios';

export const axiosAuth = axios.create({
    baseURL: AUTH_URL,
});

axiosAuth.interceptors.request.use(request => {
    return request;
});

axiosAuth.interceptors.response.use(
    response => {
        if (response.config.responseType === 'document') {
            return response.data;
        }

        return response;
    },
    error => {
        throw error;
    }
);
