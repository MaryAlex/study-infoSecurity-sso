import * as React from 'react';
import ObjectNames = SSOByRolesDefinitions.ObjectNames;
import { connect } from 'react-redux';
import User = SSOByRolesDefinitions.User;
import { RouteComponentProps } from 'react-router';
import { ObjectsService } from '@src/app/pages/list/objects/ObjectsService';
import { IArgs } from '@src/app/services/HttpRequestService';
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import { ObjectsState } from '@src/app/pages/list/objects/ObjectsState';
import { ObjectTypes } from '@src/types/types';
import Type = SSOByRolesDefinitions.Type;
import { Button, Col, Grid, Row } from 'react-bootstrap';
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import ResponseCode = SSOByRolesDefinitions.ResponseCode;
import { ID_KEY, TYPE_KEY } from '@src/app/constants/Constants';
import { EditRow } from '@src/app/pages/list/objects/editRow/editRow';
import { getForEachHandlerNodeType, newObjectTypes } from '@src/app/constants/ObjectsUtils';
import { isUserCanDeleteType, isUserCanEditType, isUserHasCreateRole } from '@src/app/constants/RolesUtils';

export interface IObjectsProps extends RouteComponentProps<any> {
    object: ObjectNames;
    user: User;
}

@(connect((store: User) => ({
    user: store,
})) as any)
export class Objects extends React.Component<IObjectsProps, ObjectsState> {
    constructor(props: IObjectsProps) {
        super(props);
        this.state = new ObjectsState();
        ObjectsService.getAll(this.props.object)
            .subscribe((response: IArgs<GetAllResponse<ObjectTypes>>) => {
                this.setState({ objects: response.data.objects });
            });
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.user.username}!</h1>
                {this.getTable()}
            </div>
        );
    }

    private getTable = (): React.ReactNode => {
        let table = this.state.objects.map(this.getRow);
        const header = this.state.objects.length && this.getHeader();
        table = this.createModeHandler(table);
        return (
            <Grid>
                {header}
                {table}
            </Grid>
        );
    }

    private createModeHandler = (table: React.ReactNode[]): React.ReactNode[] => {
        if (!isUserHasCreateRole(this.props.user)) {
            return table;
        }
        if (this.state.isCreateMode) {
            return [...table, (
                <EditRow key="createRow"
                         cancel={this.cancelCreateNew}
                         object={newObjectTypes(this.props.object)}
                         updateObject={this.addObject}/>
            )];
        } else {
            return [...table, <Button key="createButton" bsStyle="primary" onClick={this.openCreateNew}>Create</Button>];
        }
    }

    private getHeader = (): React.ReactNode => {
        const row = Object.keys(this.state.objects[0]).reduce(getForEachHandlerNodeType(this.getCol), []);
        row.push(this.getCol(TYPE_KEY));
        return (
            <Row key="header">{row}</Row>
        );
    }

    private getRow = (object: any): React.ReactNode => {
        let row = Object.keys(object).reduce<React.ReactNode[]>(getForEachHandlerNodeType(this.getCol, object), []);
        row.push(this.getCol((object[TYPE_KEY] as Type).name));
        row = this.addEditButton(row, object);
        row = this.addDeleteButton(row, object);
        return this.state.isEditModeFor === object[ID_KEY].toString() ?
            <EditRow key={object[ID_KEY]} object={object} updateObject={this.updateObject} cancel={this.cancelUpdate}/> :
            <Row key={object[ID_KEY]}>{row}</Row>;
    }

    private getCol = (text: string): React.ReactNode => {
        return (
            <Col className="my-row" key={text} xs={12} md={2}>{text}</Col>
        );
    }

    private getDeleteButton = (object: ObjectTypes): React.ReactNode => {
        return (
            <Button key={`buttonDelete${object.id}`} bsStyle="danger" onClick={this.onClickRemove(object)}>Remove</Button>
        );
    }

    private addEditButton = (row: React.ReactNode[], object: ObjectTypes): React.ReactNode[] => {
        return isUserCanEditType(this.props.user, object.type) ? [...row, this.getEditButton(object)] : row;
    }

    private addDeleteButton = (row: React.ReactNode[], object: ObjectTypes): React.ReactNode[] => {
        return isUserCanDeleteType(this.props.user, object.type) ? [...row, this.getDeleteButton(object)] : row;
    }

    private getEditButton = (object: ObjectTypes): React.ReactNode => {
        return (
            <Button key={`buttonEdit${object.id}`} bsStyle="info" onClick={this.onClickEdit(object)}>Edit</Button>
        );
    }

    private updateObject = (object: ObjectTypes): void => {
        ObjectsService.update(this.props.object, object).subscribe((response: IArgs<CommonResponse>) => {
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                this.setState(this.state.updateObject(this.state.objects, object));
            } else {
                console.error(response.data.errorMessage);
            }
            this.cancelUpdate();
        });
    }

    private addObject = (object: ObjectTypes): void => {
        ObjectsService.add(this.props.object, object).subscribe((response: IArgs<CommonResponse>) => {
            if (response.data.responseCode === ResponseCode.SUCCESS) {
                this.setState(this.state.addObject(this.state.objects, object));
            } else {
                console.error(response.data.errorMessage);
            }
            this.cancelCreateNew();
        });
    }

    private cancelUpdate = (): void => {
        this.setState(this.state.setEditStateFor(''));
    }

    private cancelCreateNew = (): void => {
        this.setState(this.state.setCreateMode(false));
    }

    private openCreateNew = (): void => {
        this.setState(this.state.setCreateMode(true));
    }

    private onClickEdit = (object: ObjectTypes): () => void => {
        return () => {
            this.setState(this.state.setEditStateFor(object.id.toString()));
        };
    }

    private onClickRemove = (object: ObjectTypes): () => void => {
        return () => {
            ObjectsService.deleteObject(this.props.object, object).subscribe((response: IArgs<CommonResponse>) => {
                if (response.data.responseCode === ResponseCode.SUCCESS) {
                    this.setState(this.state.removeObject(this.state.objects, object));
                } else {
                    console.error(response.data.errorMessage);
                }
            });
        };
    }
}
