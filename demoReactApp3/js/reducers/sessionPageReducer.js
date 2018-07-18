'use strict';

import * as actionTypes from '../infra/actionTypes';

const DEFAULT_STATE = {
    };

    export default function(state = DEFAULT_STATE, action){
        switch(action.type){
            default:
                return state;
        }
    };

    export const getSessionPageState = (state) => {
        return {...state}
    };