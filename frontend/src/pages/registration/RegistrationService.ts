import Roles = SSOByRolesDefinitions.Roles;
import { AxiosPromise } from 'axios';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import { HttpRequestService } from '@src/services/HttpRequestService';

export class RegistrationService {
    static registration = (username: string, password: string, roles: Roles[]): AxiosPromise<CommonResponse> =>
        HttpRequestService.post('/authApi/addUser', { username, password, roles })
}
