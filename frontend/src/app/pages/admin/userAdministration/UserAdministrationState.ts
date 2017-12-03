import User = SSOByRolesDefinitions.User;
import Role = SSOByRolesDefinitions.Role;

export class UserAdministrationState {
    constructor(public users: User[] = [], public roles: Role[] = [], public editModeFor: string = '', public editingRoles: Role[] = []) {
    }

    setUsers = (users: User[]) => ({ users });
    setRoles = (roles: Role[]) => ({ roles });

    updateUsersRoles = (oldUsers: User[], userId: number, roles: Role[]) => {
        oldUsers.find((user: User) => user.id === userId).roles = roles;
        return { users: oldUsers };
    }

    setEditModeFor = (editModeFor: string, editingRoles?: Role[]) => {
        if (!editModeFor) {
            return { editModeFor, editingRoles: [] };
        }
        return { editModeFor, editingRoles };
    }

    toggleRole = (oldRoles: Role[], role: Role) => {
        const editingRoles = oldRoles.find((it: Role) => it.id === role.id) ?
            oldRoles.filter((it: Role) => it.id !== role.id) : [...oldRoles, role];
        return { editingRoles };
    }
}
