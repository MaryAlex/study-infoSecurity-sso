import { AdminState } from '@src/app/pages/admin/AdminState';
import * as React from 'react';
import User = SSOByRolesDefinitions.User;
import { connect } from 'react-redux';
import { isUserHasAdminAccess } from '@src/app/constants/RolesUtils';
import { Route, Switch, withRouter } from 'react-router';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { UserAdministration } from '@src/app/pages/admin/userAdministration/userAdministration';
import { RoleAdministration } from '@src/app/pages/admin/roleAdministration/roleAdministration';

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
        // Check is user already loaded
        if (this.props.user.username && !isUserHasAdminAccess(this.props.user)) {
            this.props.history.push('/');
        }
        return (
            <div>
                <ButtonToolbar className="center">
                    <Button href="/administration/userAdministration">User Administration</Button>
                    <Button href="/administration/roleAdministration">Role Administration</Button>
                </ButtonToolbar>
                <Switch>
                    <Route path="/administration/userAdministration" component={UserAdministration}/>
                    <Route path="/administration/roleAdministration" component={RoleAdministration}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Admin);
