import Role = SSOByRolesDefinitions.Role;

export class RoleAdministrationState {
    constructor(public roles: Role[] = [], public isCreateMode: boolean = false) {
    }
    setRoles = (roles: Role[]) => ({ roles });
    setCreateMode = (isCreateMode: boolean) => ({ isCreateMode });
    removeRole = (oldRoles: Role[], role: Role) => ({ roles: oldRoles.filter((it: Role) => it.id !== role.id) });
}
