import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CookiesService } from '@src/app/services/CookiesService';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;

export interface IArgs<T> extends AxiosResponse<T> {
    data: T;
}

export class HttpRequestService {
    static get = (url: string, params?: any): Promise<IArgs<CommonResponse>> =>
        Axios(url, HttpRequestService.withToken({ method: 'get', params })).then(HttpRequestService.responsePreHandle)

    static post = (url: string, data?: any): Promise<IArgs<CommonResponse>> =>
        Axios(url, HttpRequestService.withToken({ method: 'post', data })).then(HttpRequestService.responsePreHandle)

    private static responsePreHandle = (response: IArgs<CommonResponse>) => {
        if (response.data.responseCode === ResponseCode.ERROR) {
            // TODO: change
            window.location.href = '/login';
        }
        return response;
    }

    private static withToken = (config: AxiosRequestConfig = {}): AxiosRequestConfig => {
        const token = CookiesService.get(CookiesService.TOKEN_KEY);
        return { ...config, ...{ headers: { token } } };
    }
}
