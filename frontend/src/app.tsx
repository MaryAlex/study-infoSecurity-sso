import * as React from 'react';
import Login from '@src/app/pages/login/login';
import { Route, Switch, withRouter } from 'react-router';
import Registration from '@src/app/pages/registration/registration';
import { List } from '@src/app/pages/list/list';
import { createStore } from 'redux';
import { Provider, Store } from 'react-redux';
import { users } from '@src/app/reducers/users';
import User = SSOByRolesDefinitions.User;
import { CookiesService } from '@src/app/services/CookiesService';
import { Endpoints, LOGIN_URL } from '@src/app/constants/Endpoints';
import Axios from 'axios';
import ValidationResponse = SSOByRolesDefinitions.ValidationResponse;
import { IArgs } from '@src/app/services/HttpRequestService';
import { updateUser } from '@src/app/actions/UserActions';
import { CookieObject } from 'react-cookie';

interface IAppProps {
    history?: string[];
}

interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
    private store: Store<User>;

    constructor(props: IAppProps) {
        super(props);
        this.store = createStore(users);
        this.checkToken();
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

    private checkToken = (): void => {
        const token = CookiesService.getToken();
        if (!!token) {
            this.initUserFromToken(token);
        } else {
            this.props.history.push(LOGIN_URL);
        }
    }

    private initUserFromToken = (token: CookieObject): void => {
        Axios(Endpoints.mainAuth.validation, { method: 'get', params: { token } })
            .then((response: IArgs<ValidationResponse>) => {
                this.store.dispatch(updateUser(response.data.user));
            });
    }
}

export default withRouter(App);
