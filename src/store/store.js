import { applyMiddleware, createStore } from 'redux'
import rootReducerRedux from './rootReducer.redux';
import thunk from 'redux-thunk'

const middleware = [ thunk ];

const store = createStore(rootReducerRedux,applyMiddleware(...middleware));

export default store;