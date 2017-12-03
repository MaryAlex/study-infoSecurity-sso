import * as React from 'react';
import Header from '@src/app/pages/list/header/header';
import { ListBody } from '@src/app/pages/list/listBody/listBody';
import { CookiesService } from '@src/app/services/CookiesService';
import { Endpoints, LOGIN_URL } from '@src/app/constants/Endpoints';
import { CookieObject } from 'react-cookie';
import Axios from 'axios';
import { IArgs } from '@src/app/services/HttpRequestService';
import ValidationResponse = SSOByRolesDefinitions.ValidationResponse;
import { connect, Dispatch } from 'react-redux';
import User = SSOByRolesDefinitions.User;
import { updateUser } from '@src/app/actions/UserActions';

interface IListProps {
    dispatch: Dispatch<User>;
    history?: string[];
}

@(connect() as any)
export class List extends React.Component<IListProps> {
    constructor(props: IListProps) {
        super(props);
        this.checkToken();
    }

    render() {
        return (
            <div>
                <Header/>
                <ListBody/>
            </div>
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
                this.props.dispatch(updateUser(response.data.user));
            });
    }
}
