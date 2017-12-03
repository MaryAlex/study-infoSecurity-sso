import User = SSOByRolesDefinitions.User;
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import { HttpRequestService, HttpResponse } from '@src/app/services/HttpRequestService';
import { Endpoints } from '@src/app/constants/Endpoints';
import Role = SSOByRolesDefinitions.Role;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;

export class AdminService {

    static getAllUsers = (): HttpResponse<GetAllResponse<User>> =>
        HttpRequestService.get(Endpoints.admin.getAllUsers)

    static getAllRoles = (): HttpResponse<GetAllResponse<Role>> =>
        HttpRequestService.get(Endpoints.admin.getAllRoles)

    static updateUserRoles = (userId: number, roles: Role[]): HttpResponse<CommonResponse> =>
        HttpRequestService.post(Endpoints.admin.updateUserRoles, { userId, roles })

    static deleteRole = (role: Role): HttpResponse<CommonResponse> =>
        HttpRequestService.post(Endpoints.admin.deleteRole, role)
}
