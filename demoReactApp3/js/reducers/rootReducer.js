'use strict';

import {combineReducers} from 'redux';
import homePageReducer, * as fromHomePageReducer from './homePageReducer';
import sessionPageReducer, * as fromSessionPageReducer from './sessionPageReducer';
import speakerPageReducer, * as fromSpeakerPageReducer from './speakerPageReducer';

export default combineReducers({
    homePageReducer,
    sessionPageReducer,
    speakerPageReducer
});

export const getHomePageState = (state) => fromHomePageReducer.getHomePageState(state.homePageReducer);
export const getSessionPageState = (state) => fromSessionPageReducer.getSessionPageState(state.sessionPageReducer);
export const getSpeakerPageState = (state) => fromSpeakerPageReducer.getSpeakerPageState(state.speakerPageReducer);