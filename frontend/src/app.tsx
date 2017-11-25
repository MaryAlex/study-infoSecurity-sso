import * as React from 'react';
import Login from '@src/pages/login/login';
import { Route, Switch } from 'react-router';
import Registration from '@src/pages/registration/registration';
import { List } from '@src/pages/list/list';

export class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <Route path="/" component={List}/>
            </Switch>
        );
    }
}
