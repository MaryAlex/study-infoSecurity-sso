import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CookiesService } from '@src/services/CookiesService';
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;

export interface IArgs<T> extends AxiosResponse<T> {
    data: T;
}

export class HttpRequestService {
    static get = (url: string, params?: any): Promise<IArgs<CommonResponse>> => {
        return Axios(url, HttpRequestService.withToken({ method: 'get', params }))
            .then((response: IArgs<CommonResponse>) => {
                if (response.data.responseCode === ResponseCode.ERROR) {
                    // TODO: change
                    window.location.href = '/login';
                }
                return response;
            });
    }

    private static withToken = (config: AxiosRequestConfig = {}): AxiosRequestConfig => {
        const token = CookiesService.get(CookiesService.TOKEN_KEY);
        return { ...config, ...{ headers: { token } } };
    }
}