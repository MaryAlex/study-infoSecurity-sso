import { AdminState } from '@src/app/pages/admin/AdminState';
import * as React from "react";
import User = SSOByRolesDefinitions.User;
import { connect } from 'react-redux';
import { isUserHasAdminAccess } from "@src/app/constants/RolesUtils";
import { Route, Switch, withRouter } from "react-router";
import { Button } from "react-bootstrap";
import { UserAdministration } from "@src/app/pages/admin/userAdministration/userAdministration";
import { RoleAdministration } from "@src/app/pages/admin/roleAdministration/roleAdministration";

interface IAdminProperties {
    history?: string[];
    user: User;
}

@(connect((state: User) => ({
    user: state,
})) as any)
class Admin extends React.Component<IAdminProperties, AdminState> {

    constructor(props: IAdminProperties) {
        super(props);
        this.state = new AdminState();
    }

    render() {
        // Check if we have any user
        if (this.props.user.username && !isUserHasAdminAccess(this.props.user)) {
            this.props.history.push('/');
        }
        return (
            <div>
                <Button href="/administration/userAdministration">userAdministration</Button>
                <Button href="/administration/roleAdministration">roleAdministration</Button>
                <Switch>
                    <Route path="/administration/userAdministration" component={UserAdministration}/>
                    <Route path="/administration/roleAdministration" component={RoleAdministration}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(Admin);