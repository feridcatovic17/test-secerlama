import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const INITIAL_STATE = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;