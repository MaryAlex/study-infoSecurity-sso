import * as React from 'react';
import Header from '@src/app/pages/list/header/header';
import { ListBody } from '@src/app/pages/list/listBody/listBody';
import { Route, Switch } from "react-router";
import Admin from "@src/app/pages/admin/admin";

export class List extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/administration" component={Admin}/>
                    <Route path="/" component={ListBody}/>
                </Switch>
            </div>
        );
    }
}
