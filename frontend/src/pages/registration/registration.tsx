import * as React from 'react';
import './registration.css';
import { Button, Checkbox, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import { RegistrationState } from '@src/pages/registration/RegistrationState';
import Roles = SSOByRolesDefinitions.Roles;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import { IArgs } from '@src/services/HttpRequestService';
import { RegistrationService } from '@src/pages/registration/RegistrationService';
import { withRouter } from 'react-router';

interface IRegistrationProperties {
    history: string[];
}

export class Registration extends React.Component<IRegistrationProperties, RegistrationState> {

    private checkRoles = [Roles.MOTORCYCLE_WRITE, Roles.COMPUTER_WRITE, Roles.FLAT_WRITE];

    constructor(props: IRegistrationProperties) {
        super(props);
        this.state = new RegistrationState();
    }

    render() {
        return (
            <form className="registration" onSubmit={this.submit}>
                <FormGroup>
                    <ControlLabel>Registration page</ControlLabel>
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
                    {this.getCheckBoxes()}
                    <Button type="submit">OK</Button>
                </FormGroup>
            </form>
        );
    }

    private getCheckBoxes = (): React.ReactNode =>
        this.checkRoles.map((role: Roles) => {
            const roleMap = new Map();
            roleMap.set(Roles.COMPUTER_WRITE, 'Let me see those computers!');
            roleMap.set(Roles.FLAT_WRITE, 'I want to live in my own flat duh');
            roleMap.set(Roles.MOTORCYCLE_WRITE, 'VROOM VROOM MOTORCYCLE!!1');
            const onCheckBoxChange = () => {
                if (this.state.roles.find((item: Roles) => item === role)) {
                    this.setState({ roles: this.state.deleteRole(role) });
                    return;
                }
                this.setState(this.state.addRole(role));
            };
            return (
                <Checkbox key={role} onChange={onCheckBoxChange}>
                    {roleMap.get(role)}
                </Checkbox>
            );
        })

    private onUsernameChange = (element: React.FormEvent<FormControl>): void => {
        this.setState(this.state.withUsername((element.target as HTMLInputElement).value));
    }

    private onPasswordChange = (element: React.FormEvent<FormControl>): void => {
        this.setState(this.state.withPassword((element.target as HTMLInputElement).value));
    }

    private submit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        RegistrationService.registration(this.state.username, this.state.password, this.state.roles)
            .then((response: IArgs<CommonResponse>) => {
            if (response.data.responseCode === ResponseCode.ERROR) {
                alert('Could not add new user');
            } else {
                this.props.history.push('/login');
            }
        });
    }
}

export default withRouter(Registration);
