import Axios from 'axios';
import { Endpoints } from '@src/app/constants/Endpoints';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { HttpResponse } from '@src/app/services/HttpRequestService';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;

export class RegistrationService {
    static registration = (username: string, password: string): HttpResponse<CommonResponse> =>
        fromPromise(Axios(Endpoints.accounts.add, { method: 'post', data: { username, password } }))
}
