import * as React from 'react';
import Login from '@src/pages/login/login';
import { Route, Switch } from 'react-router';
import Registration from '@src/pages/registration/registration';

export class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
            </Switch>
        );
    }
}
