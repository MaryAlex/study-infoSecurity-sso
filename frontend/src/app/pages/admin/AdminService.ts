import User = SSOByRolesDefinitions.User;
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import { HttpRequestService, HttpResponse } from '@src/app/services/HttpRequestService';
import { Endpoints } from '@src/app/constants/Endpoints';
import Role = SSOByRolesDefinitions.Role;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import Type = SSOByRolesDefinitions.Type;
import AddResponse = SSOByRolesDefinitions.AddResponse;

export class AdminService {

    static getAllUsers = (): HttpResponse<GetAllResponse<User>> =>
        HttpRequestService.get(Endpoints.admin.getAllUsers)

    static getAllRoles = (): HttpResponse<GetAllResponse<Role>> =>
        HttpRequestService.get(Endpoints.admin.getAllRoles)

    static getAllTypes = (): HttpResponse<GetAllResponse<Type>> =>
        HttpRequestService.get(Endpoints.types.getAll)

    static updateUserRoles = (userId: number, roles: Role[]): HttpResponse<CommonResponse> =>
        HttpRequestService.post(Endpoints.admin.updateUserRoles, { userId, roles })

    static deleteRole = (role: Role): HttpResponse<CommonResponse> =>
        HttpRequestService.post(Endpoints.admin.deleteRole, role)

    static addRole = (role: Role): HttpResponse<AddResponse> =>
        HttpRequestService.post(Endpoints.admin.addRole, role)
}
