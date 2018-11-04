import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import searchReducer from './reducers/search';

export default combineReducers({
    routing: routerReducer,
    search: searchReducer,
});