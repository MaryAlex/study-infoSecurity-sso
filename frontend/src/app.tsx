import * as React from 'react';
import SimpleComponent from '@src/components/simplecomponent/simpleComponent';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hey you!</h1>
                <p>Simple component</p>
                <SimpleComponent/>
            </div>
        );
    }
}