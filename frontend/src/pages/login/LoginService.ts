import Axios, { AxiosPromise } from 'axios';
import AuthenticationResponse = SSOByRolesDefinitions.AuthenticationResponse;

// TODO: Class to paths
export class LoginService {
    static authentication = (username: string, password: string): AxiosPromise<AuthenticationResponse> =>
        Axios('/authApi/authentication', { method: 'get', params: { username, password } })
}
