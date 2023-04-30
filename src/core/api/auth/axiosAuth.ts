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

        /**/// ALERT ON API ERROR
        console.log('Error', JSON.stringify(error));

        if (error.response && error.response.data)
        {
            console.log('Error response', JSON.stringify(error.response.data));
            if (error.response.data.message)
            {
//                Alert.alert(JSON.stringify(error.response.data.message));
            }
            else
            {
//                Alert.alert(JSON.stringify(error.message));
            }
        }
        else
        {
//            Alert.alert(JSON.stringify(error.message));
        }

        throw error;
    }
);
