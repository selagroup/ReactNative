'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import * as thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from '../infra/sagas'

export default function configureStore(initialState: any = undefined){
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = compose(applyMiddleware(
        thunk.default, promise, logger, sagaMiddleware));
    const store = createStore(rootReducer, initialState, enhancer);
    sagaMiddleware.run(mySaga);
    return store;
}