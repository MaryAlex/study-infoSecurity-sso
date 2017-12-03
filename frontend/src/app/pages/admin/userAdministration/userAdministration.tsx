import User = SSOByRolesDefinitions.User;
import { UserAdministrationState } from '@src/app/pages/admin/userAdministration/UserAdministrationState';
import * as React from 'react';
import { AdminService } from '@src/app/pages/admin/AdminService';
import { IArgs } from '@src/app/services/HttpRequestService';
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import { Button, Col, DropdownButton, Grid, MenuItem, Row } from 'react-bootstrap';
import Role = SSOByRolesDefinitions.Role;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;

interface IUserAdministrationProperties {
}

// TODO: Do all admin pages by one template
export class UserAdministration extends React.Component<IUserAdministrationProperties, UserAdministrationState> {
    constructor(props: IUserAdministrationProperties) {
        super(props);
        this.state = new UserAdministrationState();
        AdminService.getAllUsers().subscribe((response: IArgs<GetAllResponse<User>>) => {
            this.setState(this.state.setUsers(response.data.objects));
        });
        AdminService.getAllRoles().subscribe((response: IArgs<GetAllResponse<Role>>) => {
            this.setState(this.state.setRoles(response.data.objects));
        });
    }

    render() {
        return (
            <Grid>
                {this.getHeader()}
                {this.getTable()}
            </Grid>
        );
    }

    private getHeader = (): React.ReactNode => {
        return (
            <Row>
                <Col xs={10} md={4}><h3>Username</h3></Col>
                <Col xs={10} md={4}><h3>Roles</h3></Col>
            </Row>
        );
    }

    private getTable = (): React.ReactNode[] => this.state.users && this.state.users.map(this.getRow);

    private getRow = (user: User): React.ReactNode => {
        let rolesColumns;
        let buttons;
        let dropdown;
        if (this.state.editModeFor === user.id.toString()) {
            dropdown = this.getRolesSelect();
            buttons = [this.getConfirmButton(user), this.getCancelButton(user)];
            rolesColumns = this.getRolesColumn(this.state.editingRoles);
        } else {
            buttons = this.getEditButton(user);
            rolesColumns = this.getRolesColumn(user.roles);
        }
        return (
            <Row key={user.id}>
                <Col xs={10} md={4}>{user.username}</Col>
                <Col xs={10} md={4}>{rolesColumns}</Col>
                {dropdown || ''}
                {buttons}
            </Row>
        );
    }

    private getRolesColumn = (roles: Role[]): React.ReactNode => {
        return roles.map((role: Role) => {
            return <span key={role.id}>{role.name} </span>;
        });
    }

    private getRolesSelect = (): React.ReactNode => {
        const items = this.state.roles.map((role: Role) => {
            return (
                <MenuItem key={role.id}
                          onClick={this.onSelect(role)}
                          active={!!this.state.editingRoles.find((it: Role) => role.id === it.id)}>
                    {role.name}
                </MenuItem>
            );
        });
        return (
            <DropdownButton key="dropButton" id="id" title="Roles">
                {items}
            </DropdownButton>
        );
    }

    private getEditButton = (user: User): React.ReactNode => (
        <Button key={`editRole${user.id}`}
                bsStyle="primary"
                onClick={this.onEditClick(user)}>
            Edit Roles
        </Button>
    )

    private getConfirmButton = (user: User): React.ReactNode => (
        <Button key={`confirmRole${user.id}`}
                bsStyle="success"
                onClick={this.onConfirmClick}>
            Confirm
        </Button>
    )

    private getCancelButton = (user: User): React.ReactNode => (
        <Button key={`cancelRole${user.id}`}
                bsStyle="danger"
                onClick={this.onCancelClick}>
            Cancel
        </Button>
    )

    private onSelect = (role: Role): () => void => {
        return () => {
            this.setState(this.state.toggleRole(this.state.editingRoles, role));
        };
    }

    private onConfirmClick = (): void => {
        AdminService.updateUserRoles(Number(this.state.editModeFor), this.state.editingRoles)
            .subscribe((response: IArgs<CommonResponse>) => {
                if (response.data.responseCode === ResponseCode.SUCCESS) {
                    this.setState(
                        this.state.updateUsersRoles(this.state.users, Number(this.state.editModeFor), this.state.editingRoles));
                    this.onCancelClick();
                } else {
                    console.error(response.data.errorMessage);
                }
            });
    }

    private onCancelClick = (): void => {
        this.setState(this.state.setEditModeFor(''));
    }

    private onEditClick = (user: User): () => void => {
        return () => {
            this.setState(this.state.setEditModeFor(user.id.toString(), user.roles));
        };
    }
}
