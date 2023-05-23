/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IAxiosInstance {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>>;

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>>;

    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>>;

    patch<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>>;
}

export type Result<T, Error = AxiosError> = [null, T] | [Error, null];

class AxiosService implements IAxiosInstance {
    axiosInstance: AxiosInstance;

    constructor(axiosConfig?: AxiosRequestConfig) {
        this.axiosInstance = axios.create(axiosConfig);

        this.axiosInstance.interceptors.request.use(
            config => {
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            this.handleSuccessResponse,
            this.handleErrorResponse
        );
    }

    async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return ((await this.axiosInstance.get<T>(url, config)) as unknown) as Result<T>;
    }

    async post<T = any>(url: string, data: any, config?: AxiosRequestConfig): Promise<Result<T>> {
        return ((await this.axiosInstance.post<T>(url, data, config)) as unknown) as Result<T>;
    }

    async patch<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return ((await this.axiosInstance.patch<T>(url, config)) as unknown) as Result<T>;
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> {
        return ((await this.axiosInstance.delete<T>(url, config)) as unknown) as Result<T>;
    }

    private handleSuccessResponse = <T>(res: AxiosResponse<T>): Result<AxiosResponse> => {
        return [null, res];
    };

    private handleErrorResponse = (error: AxiosError): Result<AxiosError> => {
        // Alert.alert(error.message);
        return [error, null];
    };
}

export default AxiosService;
