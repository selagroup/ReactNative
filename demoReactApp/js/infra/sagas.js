'use strict';

import * as actionTypes from './actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects'
import * as Api from './apiService'
 
function* fetchResults(action) {
   try {
      const response = yield call(Api.fetchResponse, action.payload.query, action.payload.dispatch);      
   } catch (e) {
      yield put({type: actionTypes.FETCH_FAILED, message: e.message});
   }
}
 
function* mySaga() {
  yield takeEvery(actionTypes.FETCH_REQUESTED, fetchResults);
}

export default mySaga;