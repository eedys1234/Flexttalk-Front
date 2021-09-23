import { call, put } from 'redux-saga/effects';

export const createActions = (type) => () => { 
    return {
            success: `${type}Success`, 
            failure: `${type}Failure` 
    }
} 

export const createSaga = (actionCreateFunc, callApi) => {

    const { success, failure } = actionCreateFunc();
    
    return function* (action) {

        try {
            const { result } = yield call(callApi, action.payload);
            yield put({ type: success, data: result })
    
        } catch(e) {
            yield put({ type: failure, data: e.getResult() })
        }
    }
} 