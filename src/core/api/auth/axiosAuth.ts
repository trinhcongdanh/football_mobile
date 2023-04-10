import { AUTH_URL } from '@football/core/api/auth/config';
import axios from 'axios';
import { Alert } from 'react-native';

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
        console.log('Error', JSON.stringify(error));
        Alert.alert(JSON.stringify(error));
        throw error;
    }
);
