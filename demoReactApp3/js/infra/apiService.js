'use strict';

import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchResponse = (query, dispatch) => {
    axios.get(query, {
        headers: {
          'Accept': 'application/json'
        }
      })      
      .then(json => handleSuccess(json, dispatch))
      .catch(error => handleFail(error, dispatch));
  };

  export const fetchMultipleResponses = (queryArray, dispatch) => {
    const promiseArray = queryArray.map(query =>
      axios.get(query, {
        headers: {
          'Accept': 'application/json'
        }
      }));
      Promise.all(promiseArray)
      .then(json => handleSuccess(json, dispatch))
      .catch(error => handleFail(error, dispatch));
  };

  const handleSuccess = (response, dispatch) => dispatch({type: actionTypes.FETCH_SUCCEEDED, response: {response}});
  const handleFail = (error, dispatch) => dispatch({type: actionTypes.FETCH_FAILED, message: {error}});