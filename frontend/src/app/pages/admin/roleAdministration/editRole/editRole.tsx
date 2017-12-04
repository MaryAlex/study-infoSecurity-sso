import Type = SSOByRolesDefinitions.Type;
import * as React from 'react';
import { Button, Checkbox, DropdownButton, FormControl, FormGroup, MenuItem, Row } from 'react-bootstrap';
import Role = SSOByRolesDefinitions.Role;
import TypeCRUD = SSOByRolesDefinitions.TypeCRUD;

interface IEditRoleProps {
    cancel: () => void;
    types: Type[];
    updateObject: (role: Role) => void;
}

class EditRoleState {
    constructor(public roleName: string = '', public currentType: Type = {} as Type, public currentCRUD: TypeCRUD = {} as TypeCRUD) {
    }

    setCurrentType = (currentType: Type) => ({ currentType });
    setCurrentCRUD = (currentCRUD: TypeCRUD) => ({ currentCRUD });
    setRoleName = (roleName: string) => ({ roleName });
    setCreate = (currentCRUD: TypeCRUD, createAccess: boolean) => ({ currentCRUD: { ...currentCRUD, createAccess } });
    setRead = (currentCRUD: TypeCRUD, readAccess: boolean) => ({ currentCRUD: { ...currentCRUD, readAccess } });
    setUpdate = (currentCRUD: TypeCRUD, updateAccess: boolean) => ({ currentCRUD: { ...currentCRUD, updateAccess } });
    setDelete = (currentCRUD: TypeCRUD, deleteAccess: boolean) => ({ currentCRUD: { ...currentCRUD, deleteAccess } });
}

export class EditRole extends React.Component<IEditRoleProps, EditRoleState> {
    private currentRole: Role = { name: '', typeCRUDs: [] } as Role;

    constructor(props: IEditRoleProps) {
        super(props);
        this.state = new EditRoleState();
    }

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
                {this.getDropdown()}
                {this.getCheckboxes()}
            </FormGroup>
        );
    }

    private getDropdown = (): React.ReactNode => {
        const items = this.props.types.map((type: Type) => {
            return <MenuItem key={type.id} onClick={this.selectType(type)}>{type.name} - {type.belonging}</MenuItem>;
        });
        return (
            <DropdownButton key="dropButton" id="id" title={`${this.state.currentType.name} - ${this.state.currentType.belonging}`}>
                {items}
            </DropdownButton>
        );
    }

    private getCheckboxes = (): React.ReactNode => {
        return (
            <div>
                <Checkbox checked={!!this.state.currentCRUD.createAccess} onClick={this.createClick}>Create</Checkbox>
                <Checkbox checked={!!this.state.currentCRUD.readAccess} onClick={this.readClick}>Read</Checkbox>
                <Checkbox checked={!!this.state.currentCRUD.updateAccess} onClick={this.updateClick}>Update</Checkbox>
                <Checkbox checked={!!this.state.currentCRUD.deleteAccess} onClick={this.deleteClick}>Delete</Checkbox>
            </div>
        )
    }

    private createClick = () => {
        this.setState(this.state.setCreate(this.state.currentCRUD, !this.state.currentCRUD.createAccess));
    }

    private readClick = () => {
        this.setState(this.state.setRead(this.state.currentCRUD, !this.state.currentCRUD.readAccess));
    }

    private updateClick = () => {
        this.setState(this.state.setUpdate(this.state.currentCRUD, !this.state.currentCRUD.updateAccess));
    }

    private deleteClick = () => {
        this.setState(this.state.setDelete(this.state.currentCRUD, !this.state.currentCRUD.deleteAccess));
    }

    private selectType = (type: Type): () => void => {
        return () => {
            this.setState(this.state.setCurrentType(type));
            this.updateCurrentRole(this.state.currentCRUD);
            let currentTypeCRUD = this.currentRole.typeCRUDs.find((it: TypeCRUD) => it.type.id === type.id);
            this.setState(this.state.setCurrentCRUD(currentTypeCRUD || ({type} as TypeCRUD)));
        };
    };

    private onNameChange = (element: React.FormEvent<FormControl>): void => {
        const value = (element.target as HTMLInputElement).value;
        this.setState(this.state.setRoleName(value));
        this.currentRole.name = value;
    }

    private getConfirmButton = (): React.ReactNode => {
        return (
            <Button key={`editConfirmButton`}
                    bsStyle="success"
                    onClick={this.onConfirmClick}>
                Confirm
            </Button>
        );
    }

    private onConfirmClick = (): void => {
        this.updateCurrentRole(this.state.currentCRUD);
        this.props.updateObject(this.currentRole);
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

    private updateCurrentRole = (typeCRUD: TypeCRUD): void => {
        if (!(typeCRUD.createAccess || typeCRUD.readAccess || typeCRUD.updateAccess || typeCRUD.deleteAccess)) {
            return;
        }
        let currentTypeCRUD = this.currentRole.typeCRUDs.find((it: TypeCRUD) => it.type.id === typeCRUD.type.id);
        if (currentTypeCRUD) {
            // Must change by reference
            currentTypeCRUD = typeCRUD;
        } else {
            this.currentRole.typeCRUDs.push(typeCRUD);
        }
    }
}