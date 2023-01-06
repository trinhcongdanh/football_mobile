import { AUTH_URL } from '@football/core/api/auth/config';
import axios from 'axios';

function serializeParams(obj: any) {
    let str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(p + '=' + obj[p]);
        }
    }
    return str.join('&');
}

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
            return response.data;
        }

        return response;
    },
    error => {
        throw error;
    }
);