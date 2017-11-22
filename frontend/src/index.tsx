import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@src/app';

const renderRoot = (app: JSX.Element): void => {
    ReactDOM.render(app, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'production') {
    renderRoot((
        <App/>
    ));
} else { // removed in production, hot-reload config
    const HotContainer = require('react-hot-loader').AppContainer;
    renderRoot((
        <HotContainer>
            <App/>
        </HotContainer>
    ));

    if (module.hot) {
        // app
        module.hot.accept('./app', async () => {
            const NextApp = (await System.import('./app')).App;
            renderRoot((
                <HotContainer>
                    <NextApp/>
                </HotContainer>
            ));
        });
    }
}