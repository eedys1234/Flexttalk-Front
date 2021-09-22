import { call, put } from 'redux-saga/effects';
import { SUCCESS, FAILURE } from '../api/RestApi';
import Fx from './Fx';

export const createSaga = (actionCreateFunc, callApi) => {
    
    return function* (action) {
        const { data, status } = yield call(callApi, action.payload);

        //추후 최적화 필요
        if(SUCCESS.indexOf(status) > -1) {
            const ApiSuccess = 0;
            yield put({ type: actionCreateFunc(ApiSuccess), data })
        }        
        else if(FAILURE.indexOf(status) > -1) {
            const ApiFailure = 1;
            yield put({ type: actionCreateFunc(ApiFailure), data })
        }
    }
} 