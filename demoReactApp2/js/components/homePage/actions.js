'use strict';

import * as actionTypes from '../../infra/actionTypes';
import * as consts from '../../infra/consts';

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
