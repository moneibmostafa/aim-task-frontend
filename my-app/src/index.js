import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { store } from './store';
// import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
    // <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>,
    // </CookiesProvider>,
    document.getElementById('root'),
);