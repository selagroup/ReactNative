'use strict';

import {combineReducers} from 'redux';
import homePageReducer, * as fromHomePageReducer from './homePageReducer';

export default combineReducers({
    homePageReducer    
});

export const getHomePageState = (state) => fromHomePageReducer.getHomePageState(state.homePageReducer);