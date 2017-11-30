import * as React from 'react';
import './login.css';
import { Alert, Button, ButtonToolbar, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { LoginService } from './LoginService';
import { LoginState } from '@src/app/pages/login/LoginState';
import { IArgs } from '@src/app/services/HttpRequestService';
import AuthenticationResponse = SSOByRolesDefinitions.AuthenticationResponse;
import { CookiesService } from '@src/app/services/CookiesService';
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import { withRouter } from 'react-router';
import { AlertObject } from '@src/app/constants/AlertObject';

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
                    <ControlLabel><h1>Login</h1></ControlLabel>
                    <FormControl
                        bsSize="large"
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.onUsernameChange}/>
                    <FormControl
                        bsSize="large"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.onPasswordChange}/>
                    {this.state.alert.isShow ?
                        <Alert bsStyle="danger">
                            {this.state.alert.message}
                        </Alert> : ''}
                    <ButtonToolbar className="login_buttons">
                        <Button bsSize="large" type="submit">Login</Button>
                        <Button bsSize="large" href="/registration">Registration</Button>
                    </ButtonToolbar>
                </FormGroup>
            </form>
        );
    }

    private onUsernameChange = (element: React.FormEvent<FormControl>): void => {
        this.setState({ username: (element.target as HTMLInputElement).value });
    }

    private onPasswordChange = (element: React.FormEvent<FormControl>): void => {
        this.setState({ password: (element.target as HTMLInputElement).value });
    }

    private submit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        LoginService.authentication(this.state.username, this.state.password)
            .subscribe((response: IArgs<AuthenticationResponse>) => {
                if (response.data.responseCode === ResponseCode.SUCCESS) {
                    CookiesService.set(CookiesService.TOKEN_KEY, response.data.token);
                    this.props.history.push('/');
                } else if (response.data.responseCode === ResponseCode.ERROR) {
                    this.setState({ alert: new AlertObject(response.data.errorMessage) });
                }
            });
    }
}

export default withRouter(Login);
