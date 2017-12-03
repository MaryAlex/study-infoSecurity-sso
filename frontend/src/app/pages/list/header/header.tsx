import * as React from 'react';
import './header.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { CookiesService } from '@src/app/services/CookiesService';
import { withRouter } from 'react-router';
import { LOGIN_URL } from '@src/app/constants/Endpoints';

interface IHeaderProps {
    history?: string[];
}

// TODO: normal style
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
                <Button href="/administration">Admin</Button>
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
