import Role = SSOByRolesDefinitions.Role;
import Type = SSOByRolesDefinitions.Type;

export class RoleAdministrationState {
    constructor(public roles: Role[] = [], public isCreateMode: boolean = false, public types: Type[] = []) {
    }

    setRoles = (roles: Role[]) => ({ roles });
    addRole = (roles: Role[], role: Role) => ({ roles: [...roles, role] });
    setTypes = (types: Type[]) => ({ types });
    setCreateMode = (isCreateMode: boolean) => ({ isCreateMode });
    removeRole = (oldRoles: Role[], role: Role) => ({ roles: oldRoles.filter((it: Role) => it.id !== role.id) });
}
