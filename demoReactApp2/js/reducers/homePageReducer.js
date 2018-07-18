'use strict';

import * as actionTypes from '../infra/actionTypes';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import * as consts from '../infra/consts';
import * as arrayHelper from '../infra/arrayHelper';

const DEFAULT_STATE = {
    isLoading: false,
    message: '',
    sessions: [],
    days: []
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.FETCH_SUCCEEDED:        
            if (action.response.response.status == 200) 
            {
                if(action.response.response.config.url == consts.BASE_API_ADDRESS + consts.SESSIONS_API)
                {
                    var currentSessions = _.flatten(arrayHelper.getDeepArray(action.response.response.data, "sessions"));
                    var currentDays = [];
                    _.forEach(action.response.response.data, function(v) {
                        const res = arrayHelper.getDeepArray(v, "slots");
                        if (typeof res == "object" && res.length)
                            currentDays.push.apply(currentDays, res);
                    });

                    return {...state, isLoading: false, message: 'Data is Loaded', days: currentDays, sessions: currentSessions}; 
                }
                else if(action.response.response.config.url == consts.BASE_API_ADDRESS + consts.SPEAKERS_API)
                {
                    const speakers =  _.flatten(arrayHelper.getDeepObjects(action.response.response.data, "name"));
                    return {...state, isLoading: false, message: 'Data is Loaded'}; 
                }
                else if(action.response.response.config.url == consts.BASE_API_ADDRESS + consts.TRACKS_API)
                {
                    const tracks = _.flatten(arrayHelper.getDeepObjects(action.response.response.data, "name"));
                    return {...state, isLoading: false, message: 'Data is Loaded'}; 
                } 
                else
                {
                    return {...state, isLoading: false, message: 'Data is Loaded'}; 
                }                  
            } 
            else 
            {
                return {...state, isLoading: false, message: 'Load failed'};
            }                
        case actionTypes.FETCH_FAILED:
            return {...state, isLoading: false, message: action.message};
        case actionTypes.FETCH_REQUESTED:
            return {...state, isLoading: true};        
        default:
            return state;
    }
}

export const getHomePageState = (state) => {
    return {...state}
};
