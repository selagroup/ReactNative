'use strict';

import * as actionTypes from '../../infra/actionTypes';

export const executeQuery = () => {
    return (dispatch, getState) => {
      const query = 'http://www.seladeveloperpractice.com/api/sessions';     
      dispatch({type: actionTypes.FETCH_REQUESTED, 
                payload: {
                      query, 
                      dispatch
        }
      })        
    }    
  };  