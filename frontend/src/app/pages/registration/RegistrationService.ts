import { Endpoints } from '@src/app/constants/Endpoints';
import { HttpRequestService, HttpResponse } from '@src/app/services/HttpRequestService';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import Roles = SSOByRolesDefinitions.Roles;

export class RegistrationService {
    static registration = (username: string, password: string, roles: Roles[]): HttpResponse<CommonResponse> =>
        HttpRequestService.post(Endpoints.accounts.add, { username, password, roles })
}
