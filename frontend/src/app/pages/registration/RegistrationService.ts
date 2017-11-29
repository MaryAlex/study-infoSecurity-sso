import { AxiosPromise } from 'axios';
import { Endpoints } from '@src/app/constants/Endpoints';
import { HttpRequestService } from '@src/app/services/HttpRequestService';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import Roles = SSOByRolesDefinitions.Roles;

export class RegistrationService {
    static registration = (username: string, password: string, roles: Roles[]): AxiosPromise<CommonResponse> =>
        HttpRequestService.post(Endpoints.accounts.add, { username, password, roles })
}
