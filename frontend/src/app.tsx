import * as React from 'react';
import Login from '@src/app/pages/login/login';
import { Route, Switch } from 'react-router';
import Registration from '@src/app/pages/registration/registration';
import { List } from '@src/app/pages/list/list';

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
