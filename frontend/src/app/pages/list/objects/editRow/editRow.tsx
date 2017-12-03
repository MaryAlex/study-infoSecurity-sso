import { Button, FormControl, Row } from 'react-bootstrap';
import * as React from 'react';
import { ObjectTypes } from '@src/types/types';
import { ID_KEY, TYPE_KEY } from '@src/app/constants/Constants';
import { getForEachHandlerNodeType } from '@src/app/constants/ObjectsUtils';

interface IRowInputProps {
    cancel: () => void;
    object: any;
    updateObject: (object: ObjectTypes) => void;
}

interface IEditRowState {
    inputs: { [field: string]: string };
}

export class EditRow extends React.Component<IRowInputProps, IEditRowState> {
    private currentObject: any;
    private element: HTMLInputElement;

    constructor(props: IRowInputProps) {
        super(props);
        this.currentObject = this.props.object;
        this.state = { inputs: {} };
        Object.keys(this.props.object).forEach((key: string) => {
            if (key === ID_KEY || key === TYPE_KEY) {
                return;
            }
            this.state.inputs[key] = this.props.object[key] || '';
        });
    }

    render() {
        return (
            <Row>
                {this.getRow()}
                {this.getConfirmButton()}
                {this.getCancelButton()}
            </Row>
        );
    }

    private getConfirmButton = (): React.ReactNode => {
        return (
            <Button key={`editConfirmButton${this.props.object[ID_KEY]}`}
                    bsStyle="success"
                    onClick={() => this.props.updateObject(this.currentObject)}>
                Confirm
            </Button>
        )
    }

    private getCancelButton = (): React.ReactNode => {
        return (
            <Button key={`editCancelButton${this.props.object[ID_KEY]}`}
                    bsStyle="danger"
                    onClick={() => this.props.cancel()}>
                Cancel
            </Button>
        )
    }

    private getRow = (): React.ReactNode[] => {
        return Object.keys(this.props.object)
            .reduce(getForEachHandlerNodeType(this.getInput), [])
    }

    private getInput = (key: string): React.ReactNode => {
        return (<FormControl key={key}
                             type="text"
                             bsSize="small"
                             value={this.state.inputs[key]}
                             placeholder={key}
                             onChange={this.onValueChange(key)}/>)
    }

    private onValueChange = (key: string): (element: React.FormEvent<FormControl>) => void => {
        return (element: React.FormEvent<FormControl>) => {
            this.element = element.target as HTMLInputElement;
            this.setState((prevState: IEditRowState) => {
                const inputs = prevState.inputs;
                inputs[key] = this.element.value;
                this.currentObject[key] = this.element.value;
                return { ...prevState, inputs };
            });
        }
    }
}