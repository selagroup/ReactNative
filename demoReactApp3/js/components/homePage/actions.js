'use strict';

import * as actionTypes from '../../infra/actionTypes';
import * as consts from '../../infra/consts';
import {Actions} from 'react-native-router-flux';
import {getHomePageState} from '../../reducers/rootReducer';

export const getQuery = (api) => {
    return (dispatch, getState) => {
      const query = consts.BASE_API_ADDRESS + api;     
      dispatch({type: actionTypes.FETCH_REQUESTED, 
                payload: {
                      query, 
                      dispatch
        }
      })        
    }    
  }; 

  export const getMultipleQueries = (apis) => {
    return (dispatch, getState) => {
      const queryArray = apis.map( api => consts.BASE_API_ADDRESS + api );     
      dispatch({type: actionTypes.FETCH_MULTIPLE_REQUESTED, 
                payload: {
                      queryArray, 
                      dispatch
        }
      })        
    }    
  }; 

  export const navigateToSpeaker = (item) => {
    return (dispatch, getState) => {
      const state = getHomePageState(getState());
      let speakers = state.speakers.filter(sp => sp.name == item.speaker);
      if(speakers.length > 0) 
      {
          Actions.speakerPage({ speaker: speakers[0] });  
      }     
      dispatch({type: 'null'});        
    }    
  };
  
  export const navigateToSession = (item) => {
    return (dispatch, getState) => {
      Actions.sessionPage({ session: item });   
      dispatch({type: 'null'});        
    }    
  }; 
