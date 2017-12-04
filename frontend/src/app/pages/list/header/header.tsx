import * as React from 'react';
import './header.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { CookiesService } from '@src/app/services/CookiesService';
import { withRouter } from 'react-router';
import { LOGIN_URL } from '@src/app/constants/Endpoints';
import User = SSOByRolesDefinitions.User;
import { connect } from 'react-redux';
import { isUserHasAdminAccess } from '@src/app/constants/RolesUtils';

interface IHeaderProps {
    history?: string[];
    user?: User;
}

@(connect((store: User) => ({
    user: store,
})) as any)
export class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <ButtonToolbar className="center">
                    <Button bsSize="large" href="/computers">Computers</Button>
                    <Button bsSize="large" href="/flats">Flats</Button>
                    <Button bsSize="large" href="/motorcycles">Motorcycles</Button>
                </ButtonToolbar>
                {isUserHasAdminAccess(this.props.user) ? <Button href="/administration">Admin</Button> : ''}
                <Button className="header_logout" onClick={this.logout}>Logout</Button>
            </div>
        );
    }

    private logout = (): void => {
        CookiesService.removeToken();
        this.props.history.push(LOGIN_URL);
    }
}

export default withRouter(Header);
