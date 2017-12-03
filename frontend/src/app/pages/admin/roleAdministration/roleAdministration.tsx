import User = SSOByRolesDefinitions.User;
import * as React from "react";
import { RoleAdministrationState } from "@src/app/pages/admin/roleAdministration/RoleAdministrationState";

interface IRoleAdministrationProperties {
    user: User;
}

export class RoleAdministration extends React.Component<IRoleAdministrationProperties, RoleAdministrationState>{
    constructor(props: IRoleAdministrationProperties) {
        super(props);
        this.state = new RoleAdministrationState();
    }
    render() {
        return (<div>Role Administration</div>)
    }
}