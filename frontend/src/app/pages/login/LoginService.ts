import Axios from 'axios';
import { Endpoints } from '@src/app/constants/Endpoints';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { HttpResponse } from '@src/app/services/HttpRequestService';
import AuthenticationResponse = SSOByRolesDefinitions.AuthenticationResponse;

export class LoginService {
    static authentication = (username: string, password: string): HttpResponse<AuthenticationResponse> =>
        fromPromise(Axios(Endpoints.mainAuth.authentication, { method: 'get', params: { username, password } }))
}
