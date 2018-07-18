'use strict';

import * as actionTypes from '../infra/actionTypes';
import _ from 'lodash';
import * as consts from '../infra/consts';
import * as arrayHelper from '../infra/arrayHelper';

const DEFAULT_STATE = {
    isLoading: false,
    message: '',
    sessions: [],
    days: [],
    speakers: [],
    tracks: []
}

export default function(state = DEFAULT_STATE, action){
    switch(action.type)
    {
        case actionTypes.FETCH_SUCCEEDED:
            return onSuccess(action.response.response, state);                          
        case actionTypes.FETCH_FAILED:
            return {...state, isLoading: false, message: JSON.stringify(action.message.error)};
        case actionTypes.FETCH_REQUESTED:
            return {...state, isLoading: true};  
        case actionTypes.FETCH_MULTIPLE_REQUESTED:
            return {...state, isLoading: true};       
        default:
            return state;
    }
}

function onSuccess(responseArray, state)
{
    let statusState = {...state, isLoading: false, message: ''};
    responseArray.map(response => 
    {
        if (response.status == 200) 
        {                        
            if(response.config.url == consts.BASE_API_ADDRESS + consts.SESSIONS_API)
            {
                const currentSessions = _.flatten(arrayHelper.getDeepArray(response.data, "sessions"));
                let currentDays = [];
                _.forEach(response.data, function(v) {
                    const res = arrayHelper.getDeepArray(v, "slots");
                    if (typeof res == "object" && res.length)
                    {
                        const result = {array: res, description: v.description.description, trackTitles: v.trackTitles};
                        currentDays.push(result);
                    }                            
                });

                statusState = {...statusState, days: currentDays, sessions: currentSessions}; 
            }
            else if(response.config.url == consts.BASE_API_ADDRESS + consts.SPEAKERS_API)
            {
                const currentSpeakers =  _.flatten(arrayHelper.getDeepObjects(response.data, "name"));
                statusState = {...statusState, speakers: currentSpeakers}; 
            }
            else if(response.config.url == consts.BASE_API_ADDRESS + consts.TRACKS_API)
            {
                const currentTracks = _.flatten(arrayHelper.getDeepObjects(response.data, "name"));
                statusState = {...statusState, tracks: currentTracks}; 
            }
        }
        else 
        {
            statusState = {...statusState, message: 'Load failed'};
        }     
    });

    return statusState;
}

// function onSuccess(response, state)
// {
//     // if(response.config.url == consts.BASE_API_ADDRESS + consts.SESSIONS_API)
//     // {
//     //     const currentSessions = _.flatten(arrayHelper.getDeepArray(response.data, "sessions"));
//     //     let currentDays = [];
//     //     _.forEach(response.data, function(v) {
//     //         const res = arrayHelper.getDeepArray(v, "slots");
//     //         if (typeof res == "object" && res.length)
//     //         {
//     //             const result = {array: res, description: v.description.description, trackTitles: v.trackTitles};
//     //             currentDays.push(result);
//     //         }                            
//     //     });

//     //     return {...state, isLoading: false, message: '', days: currentDays, sessions: currentSessions}; 
//     // }
//     // else if(response.config.url == consts.BASE_API_ADDRESS + consts.SPEAKERS_API)
//     // {
//     //     const currentSpeakers =  _.flatten(arrayHelper.getDeepObjects(response.data, "name"));
//     //     return {...state, isLoading: false, message: '', speakers: currentSpeakers}; 
//     // }
//     // else if(response.config.url == consts.BASE_API_ADDRESS + consts.TRACKS_API)
//     // {
//     //     const tracks = _.flatten(arrayHelper.getDeepObjects(response.data, "name"));
//     //     return {...state, isLoading: false, message: ''}; 
//     // } 
//     // else
//     // {
//     //     return {...state, isLoading: false, message: ''}; 
//     // }        
// }

export const getHomePageState = (state) => {
    return {...state}
};
