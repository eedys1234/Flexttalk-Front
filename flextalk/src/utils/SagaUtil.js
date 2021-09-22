import { call, put } from 'redux-saga/effects';
import { SUCCESS, FAILURE } from '../api/RestApi';

export const createActions = (type) => () => { 
    return {
            success: `${type}Success`, 
            failure: `${type}Failure` 
    }
} 

export const createSaga = (actionCreateFunc, callApi) => {

    const { success, failure } = actionCreateFunc();
    
    return function* (action) {
        const { data : { result }, status } = yield call(callApi, action.payload);

        //추후 최적화 필요
        if(SUCCESS.indexOf(status) > -1) {
            yield put({ type: success, data: result })
        }        
        else if(FAILURE.indexOf(status) > -1) {
            yield put({ type: failure, data: result })
        }
    }
} 