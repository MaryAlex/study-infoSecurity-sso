import Axios, { AxiosPromise } from 'axios';
import { Endpoints } from '@src/app/constants/Endpoints';
import AuthenticationResponse = SSOByRolesDefinitions.AuthenticationResponse;

export class LoginService {
    static authentication = (username: string, password: string): AxiosPromise<AuthenticationResponse> =>
        Axios(Endpoints.mainAuth.authentication, { method: 'get', params: { username, password } })
}
