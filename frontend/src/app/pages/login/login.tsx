import * as React from 'react';
import './login.css';
import { Button, ButtonToolbar, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { LoginService } from './LoginService';
import { LoginState } from '@src/app/pages/login/LoginState';
import { IArgs } from '@src/app/services/HttpRequestService';
import AuthenticationResponse = SSOByRolesDefinitions.AuthenticationResponse;
import { CookiesService } from '@src/app/services/CookiesService';
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import { withRouter } from 'react-router';

interface ILoginProperties {
    history: string[];
}

export class Login extends React.Component<ILoginProperties, LoginState> {
    constructor(props: ILoginProperties) {
        super(props);
        this.state = new LoginState();
    }

    render() {
        return (
            <form className="login" onSubmit={this.submit}>
                <FormGroup>
                    <ControlLabel>Login, please</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.onUsernameChange}/>
                    <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.onPasswordChange}/>
                    <ButtonToolbar className="login_buttons">
                        <Button type="submit">Login</Button>
                        <Button href="/registration">Registration</Button>
                    </ButtonToolbar>
                </FormGroup>
            </form>
        );
    }

    private onUsernameChange = (element: React.FormEvent<FormControl>): void => {
        this.setState(this.state.withUsername((element.target as HTMLInputElement).value));
    }

    private onPasswordChange = (element: React.FormEvent<FormControl>): void => {
        this.setState(this.state.withPassword((element.target as HTMLInputElement).value));
    }

    private submit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        LoginService.authentication(this.state.username, this.state.password)
            .subscribe((response: IArgs<AuthenticationResponse>) => {
                if (response.data.responseCode === ResponseCode.SUCCESS) {
                    CookiesService.set(CookiesService.TOKEN_KEY, response.data.token);
                    this.props.history.push('/');
                }
            });
    }
}

export default withRouter(Login);
