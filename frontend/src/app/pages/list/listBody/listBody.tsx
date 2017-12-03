import * as React from 'react';
import { Route, Switch } from 'react-router';
import ObjectNames = SSOByRolesDefinitions.ObjectNames;
import { IObjectsProps, Objects } from '@src/app/pages/list/objects/objects';

export class ListBody extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/computers" render={this.openObjects(ObjectNames.COMPUTER)}/>
                <Route path="/flats" render={this.openObjects(ObjectNames.FLAT)}/>
                <Route path="/motorcycles" render={this.openObjects(ObjectNames.MOTORCYCLE)}/>
            </Switch>
        );
    }

    private openObjects = (object: ObjectNames) => (props: IObjectsProps) => (<Objects {...props} object={object}/>);
}
