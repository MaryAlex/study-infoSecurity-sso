import * as React from 'react';
import { RoleAdministrationState } from '@src/app/pages/admin/roleAdministration/RoleAdministrationState';
import { AdminService } from '@src/app/pages/admin/AdminService';
import { IArgs } from '@src/app/services/HttpRequestService';
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import Role = SSOByRolesDefinitions.Role;
import { Button, Col, Grid, Row } from 'react-bootstrap';
import TypeCRUD = SSOByRolesDefinitions.TypeCRUD;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import { EditRole } from '@src/app/pages/admin/roleAdministration/editRole/editRole';
import AddResponse = SSOByRolesDefinitions.AddResponse;
import Type = SSOByRolesDefinitions.Type;

interface IRoleAdministrationProperties {
}

export class RoleAdministration extends React.Component<IRoleAdministrationProperties, RoleAdministrationState> {
    constructor(props: IRoleAdministrationProperties) {
        super(props);
        this.state = new RoleAdministrationState();
        AdminService.getAllRoles().subscribe((response: IArgs<GetAllResponse<Role>>) => {
            this.setState(this.state.setRoles(response.data.objects));
        });
        AdminService.getAllTypes().subscribe((response: IArgs<GetAllResponse<Type>>) => {
            this.setState(this.state.setTypes(response.data.objects));
        });
    }

    render() {
        return (
            <Grid>
                {this.getHeader()}
                {this.getTable()}
                {this.state.isCreateMode ? this.getEditRow() : this.getCreateButton()}
            </Grid>
        );
    }

    private getHeader = (): React.ReactNode => {
        return (
            <Row>
                <Col xs={10} md={2}><h3>Role Name</h3></Col>
                <Col xs={10} md={2}><h3>Create</h3></Col>
                <Col xs={10} md={2}><h3>Read</h3></Col>
                <Col xs={10} md={2}><h3>Update</h3></Col>
                <Col xs={10} md={2}><h3>Delete</h3></Col>
            </Row>
        );
    }

    private getTable = (): React.ReactNode[] => this.state.roles && this.state.roles.map(this.getRow);

    private getRow = (role: Role): React.ReactNode => {
        let types = this.getRolesColumn(role);
        return (
            <Row key={role.id}>
                <Col xs={10} md={2}>{role.name}</Col>
                {types}
                {this.getDeleteButton(role)}
            </Row>
        );
    }

    private getEditRow = (): React.ReactNode => {
        return (
            <EditRole cancel={this.onCancelClick} types={this.state.types} updateObject={this.saveRole}/>
        );
    }

    private getRolesColumn = (role: Role): React.ReactNode[] => {
        let createTypes: React.ReactNode[] = [];
        let readTypes: React.ReactNode[] = [];
        let updateTypes: React.ReactNode[] = [];
        let deleteTypes: React.ReactNode[] = [];

        role.typeCRUDs.forEach((type: TypeCRUD) => {
            if (type.createAccess) {
                createTypes.push(<span key={`create${type.id}`}>{type.type.name} </span>);
            }
            if (type.readAccess) {
                readTypes.push(<span key={`read${type.id}`}>{type.type.name} </span>);
            }
            if (type.updateAccess) {
                updateTypes.push(<span key={`update${type.id}`}>{type.type.name} </span>);
            }
            if (type.deleteAccess) {
                deleteTypes.push(<span key={`delete${type.id}`}>{type.type.name} </span>);
            }
        });
        return [
            <Col key={`create${role.id}`} xs={10} md={2}>{createTypes}</Col>,
            <Col key={`read${role.id}`} xs={10} md={2}>{readTypes}</Col>,
            <Col key={`update${role.id}`} xs={10} md={2}>{updateTypes}</Col>,
            <Col key={`delete${role.id}`} xs={10} md={2}>{deleteTypes}</Col>
        ];
    }

    private getDeleteButton = (role: Role): React.ReactNode => {
        return <Button key={`delete${role.id}`}
                       onClick={this.onDeleteClick(role)}
                       bsStyle="danger">Delete</Button>
    }

    private getCreateButton = (): React.ReactNode => {
        return <Button key={`createButton`}
                       onClick={this.onCreateClick}
                       bsStyle="primary">Create</Button>
    }

    private onCreateClick = (): void => {
        this.setState(this.state.setCreateMode(true));
    }

    private onCancelClick = (): void => {
        this.setState(this.state.setCreateMode(false));
    }

    private saveRole = (role: Role): void => {
        AdminService.addRole(role).subscribe((response: IArgs<AddResponse>) => {
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                role.id = response.data.id;
                this.setState(this.state.addRole(this.state.roles, role));
                this.onCancelClick();
            } else if (response.data.responseCode === ResponseCode.ERROR) {
                console.error(response.data.errorMessage);
            }
        });
    }

    private onDeleteClick = (role: Role): () => void => {
        return () => {
            AdminService.deleteRole(role).subscribe((response: IArgs<CommonResponse>) => {
                if (response.data.responseCode === ResponseCode.SUCCESS) {
                    this.setState(this.state.removeRole(this.state.roles, role));
                } else {
                    console.error(response.data.errorMessage);
                }
            });
        };
    }
}
