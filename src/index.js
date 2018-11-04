import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {useRouterHistory} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';

import '../style/layout.scss';
import App from './app';

import Reducers from './reducers';

const browserHistory = createHistory({basename: '/'});
const myRouterMiddleware = routerMiddleware(browserHistory);

let middlewares = applyMiddleware(thunkMiddleware, myRouterMiddleware);

export const store = createStore(
    Reducers,
    middlewares
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={browserHistory}>
            <App/>
        </ConnectedRouter>
    </Provider>
    , document.querySelector('#root'));

export default browserHistory;