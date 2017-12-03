import User = SSOByRolesDefinitions.User;
import { UserAdministrationState } from "@src/app/pages/admin/userAdministration/UserAdministrationState";
import * as React from "react";

interface IUserAdministrationProperties {
    user: User;
}

export class UserAdministration extends React.Component<IUserAdministrationProperties, UserAdministrationState>{
    constructor(props: IUserAdministrationProperties) {
        super(props);
        this.state = new UserAdministrationState();
    }
    render() {
        return (<div>User Administration</div>)
    }
}