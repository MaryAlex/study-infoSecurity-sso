import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@src/app';
import { BrowserRouter } from 'react-router-dom';
import './app.css';

const renderRoot = (app: JSX.Element): void => {
    document.getElementById('body').className = 'app';
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
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HotContainer>
    ));

    if (module.hot) {
        // app
        module.hot.accept('./app', async () => {
            const NextApp = (await System.import('./app')).App;
            renderRoot((
                <HotContainer>
                    <BrowserRouter>
                        <NextApp/>
                    </BrowserRouter>
                </HotContainer>
            ));
        });
    }
}
