import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { CookiesService } from '@src/app/services/CookiesService';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;

export type HttpResponse<T> = Observable<IArgs<T>>;

export interface IArgs<T> extends AxiosResponse<T> {
    data: T;
}

// TODO: add case when we get 'red' answer
export class HttpRequestService {
    static get = <T extends CommonResponse>(url: string, params?: any): HttpResponse<T> =>
        fromPromise(Axios(url, HttpRequestService.withToken({ method: 'get', params }))
            .then(HttpRequestService.responsePreHandle))

    static post = <T extends CommonResponse>(url: string, data?: any): HttpResponse<T> =>
        fromPromise(Axios(url, HttpRequestService.withToken({ method: 'post', data }))
            .then(HttpRequestService.responsePreHandle))

    private static responsePreHandle = <T extends CommonResponse>(response: IArgs<T>): IArgs<T> => {
        if (response.data.responseCode === ResponseCode.AUTHENTICATION_FAIL_ERROR) {
            // TODO: change
            window.location.href = '/login';
        }
        return response;
    }

    private static withToken = (config: AxiosRequestConfig = {}): AxiosRequestConfig => {
        const token = CookiesService.getToken();
        return { ...config, ...{ headers: { token } } };
    }
}
