import * as React from 'react';
import Header from '@src/app/pages/list/header/header';
import { ListBody } from '@src/app/pages/list/listBody/listBody';

export class List extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ListBody/>
            </div>
        );
    }
}
