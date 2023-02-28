/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthData } from '@football/app/utils/constants/enum';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import AxiosService from '@football/core/services/axios.service';
import { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { useQuery } from 'react-query';

function serializeParams(obj: any) {
    const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
    return a;
}

const axiosConfig: AxiosRequestConfig = {
    baseURL: AUTH_URL,
};

class AuthService extends AxiosService {
    constructor() {
        super(axiosConfig);
    }

    getProfile({ token, item_id }) {
        const requestParams = serializeParams({
            action: ACTION,
            token,
            item_id,
            call: AuthData.GET_PROFILE,
        });
        return this.post(`/`, requestParams);
    }
}

const authService = new AuthService();

export const useProfileUser = ({ token, item_id }) => {
    return useQuery<any>(`get-profile`, () => authService.getProfile({ token, item_id }));
};

export default authService;
