import Type = SSOByRolesDefinitions.Type;
import * as React from 'react';
import { Button, FormControl, FormGroup, Row } from 'react-bootstrap';
import Role = SSOByRolesDefinitions.Role;

interface IEditRoleProps {
    cancel: () => void;
    types: Type[];
    updateObject: (role: Role) => void;
}

class EditRoleState {
    constructor(private roleName: string = '') {
    }

    setRoleName = (roleName: string) => ({ roleName });
}

export class EditRole extends React.Component<IEditRoleProps, EditRoleState> {
    private currentObject: Role;

    render() {
        return (
            <Row>
                {this.getEditablePart()}
                {this.getConfirmButton()}
                {this.getCancelButton()}
            </Row>
        );
    }

    private getEditablePart = (): React.ReactNode => {
        return (
            <FormGroup>
                <FormControl key="nameRole"
                             bsSize="small"
                             value={this.state.roleName}
                             placeholder="Name"
                             onChange={this.onNameChange}
                             type="text"/>
            </FormGroup>
        );
    }

    private onNameChange = (element: React.FormEvent<FormControl>): void => {
        const value = (element.target as HTMLInputElement).value;
        this.setState(this.state.setRoleName(value));
        this.currentObject.name = value;
    }

    private getConfirmButton = (): React.ReactNode => {
        return (
            <Button key={`editConfirmButton`}
                    bsStyle="success"
                    onClick={() => this.props.updateObject(this.currentObject)}>
                Confirm
            </Button>
        );
    }

    private getCancelButton = (): React.ReactNode => {
        return (
            <Button key={`editCancelButton`}
                    bsStyle="danger"
                    onClick={() => this.props.cancel()}>
                Cancel
            </Button>
        );
    }
}