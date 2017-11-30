import * as React from 'react';
import './registration.css';
import { Alert, Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { RegistrationState } from '@src/app/pages/registration/RegistrationState';
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import { IArgs } from '@src/app/services/HttpRequestService';
import { RegistrationService } from '@src/app/pages/registration/RegistrationService';
import { withRouter } from 'react-router';
import { AlertObject } from '@src/app/constants/AlertObject';

interface IRegistrationProperties {
    history: string[];
}

export class Registration extends React.Component<IRegistrationProperties, RegistrationState> {

    constructor(props: IRegistrationProperties) {
        super(props);
        this.state = new RegistrationState();
    }

    render() {
        return (
            <form className="registration" onSubmit={this.submit}>
                <FormGroup>
                    <ControlLabel><h1>Registration page</h1></ControlLabel>
                    <FormControl
                        bsSize="large"
                        type="text"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.onUsernameChange}/>
                    <FormControl
                        bsSize="large"
                        type="text"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.onPasswordChange}/>
                    {this.state.alert.isShow ?
                        <Alert bsStyle="danger">
                            {this.state.alert.message}
                        </Alert> : ''}
                    <Button bsSize="large" type="submit">Sign up</Button>
                    <Button bsSize="large" type="button" onClick={this.cancel}>Cancel</Button>
                </FormGroup>
            </form>
        );
    }

    private cancel = (): void => {
        this.props.history.push('/login');
    }

    private onUsernameChange = (element: React.FormEvent<FormControl>): void => {
        this.setState({ username: (element.target as HTMLInputElement).value });
    }

    private onPasswordChange = (element: React.FormEvent<FormControl>): void => {
        this.setState({ password: (element.target as HTMLInputElement).value });
    }

    private submit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        RegistrationService.registration(this.state.username, this.state.password)
            .subscribe((response: IArgs<CommonResponse>) => {
                if (response.data.responseCode === ResponseCode.ERROR) {
                    this.setState({ alert: new AlertObject(response.data.errorMessage) });
                } else if (response.data.responseCode === ResponseCode.SUCCESS) {
                    this.props.history.push('/login');
                }
            });
    }
}

export default withRouter(Registration);
