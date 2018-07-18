'use strict';

import * as actionTypes from '../infra/actionTypes';
import {Actions} from 'react-native-router-flux';

const DEFAULT_STATE = {
    isLoading: false,
    message: ''
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case actionTypes.FETCH_SUCCEEDED:        
            if (action.response.response.status == 200) {
                return {...state, isLoading: false, message: 'Data is Loaded'};    
            } else {
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
