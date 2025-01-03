import {createStore} from 'redux';
import reducers from './reducers/index';

export const store=createStore(reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__())