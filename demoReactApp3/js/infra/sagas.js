'use strict';

import * as actionTypes from './actionTypes';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as Api from './apiService';
 
function* fetchResults(action) {
   try {
      const response = yield call(Api.fetchResponse, action.payload.query, action.payload.dispatch);      
   } catch (e) {
      yield put({type: actionTypes.FETCH_FAILED, message: e.message});
   }
}

function* fetchMultipleResults(action) {
  try {
     const response = yield call(Api.fetchMultipleResponses, action.payload.queryArray, action.payload.dispatch);      
  } catch (e) {
     yield put({type: actionTypes.FETCH_FAILED, message: e.message});
  }
}
 
function* FetchRequestedSaga() {
  yield takeEvery(actionTypes.FETCH_REQUESTED, fetchResults);
}

function* FetchMultipleRequestedSaga() {
  yield takeEvery(actionTypes.FETCH_MULTIPLE_REQUESTED, fetchMultipleResults);
}

export default function* rootSaga() {
  yield all([
    FetchRequestedSaga(),
    FetchMultipleRequestedSaga()
  ])
}
