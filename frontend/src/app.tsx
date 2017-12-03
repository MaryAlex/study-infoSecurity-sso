import * as React from 'react';
import Login from '@src/app/pages/login/login';
import { Route, Switch } from 'react-router';
import Registration from '@src/app/pages/registration/registration';
import { List } from '@src/app/pages/list/list';
import { createStore } from 'redux';
import { Provider, Store } from 'react-redux';
import { users } from '@src/app/reducers/users';
import User = SSOByRolesDefinitions.User;

interface IAppProps {
}

interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
    private store: Store<User>;

    constructor(props: IAppProps) {
        super(props);
        this.store = createStore(users);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Route path="/" component={List}/>
                </Switch>
            </Provider>
        );
    }
}

export default App;
