export class RegistrationState {
    constructor(public username: string = '', public password: string = '', public roles: SSOByRolesDefinitions.Roles[] = []) {
    }

    addRole = (role: SSOByRolesDefinitions.Roles): RegistrationState => {
        const to = this.copy();
        to.roles = [...this.roles, role];
        return to;
    }

    deleteRole = (role: SSOByRolesDefinitions.Roles): SSOByRolesDefinitions.Roles[] =>
        this.roles.reduce((newRoles: SSOByRolesDefinitions.Roles[], item: SSOByRolesDefinitions.Roles) => {
            if (item !== role) {
                return [...newRoles, item];
            }
            return newRoles;
        }, [])

    withPassword = (password: string): RegistrationState => {
        const to = this.copy();
        to.password = password;
        return to;
    }

    withUsername = (username: string): RegistrationState => {
        const to = this.copy();
        to.username = username;
        return to;
    }

    withRoles = (roles: SSOByRolesDefinitions.Roles[]): RegistrationState => {
        const to = this.copy();
        to.roles = roles;
        return to;
    }

    private copy(): RegistrationState {
        return new RegistrationState(this.username, this.password, this.roles);
    }
}
