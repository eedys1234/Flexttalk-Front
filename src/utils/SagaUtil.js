import { call, put } from 'redux-saga/effects';

export const createActions = (type) => () => { 
    return {
            success: `${type}Success`, 
            failure: `${type}Failure` 
    }
} 

export const createSaga = (actionCreateFunc, callApi, before, afterSuccess, afterFailure) => {

    const { success } = actionCreateFunc();
    
    return function* (action) {

        try {

            if(before) {
                for(const a of afterSuccess) {
                    yield put({ type: a.type, payload: action.payload});
                }
            }

            const { result } = yield call(callApi, action.payload);
            yield put({ type: success, data: result })
            
            if(afterSuccess) {
                for(const a of afterSuccess) {
                    yield put({ type: a.type, payload: action.payload});
                }
            }
            
        } catch(e) {

            if(afterFailure) {
                for(const a of afterFailure) {
                    yield put({ type: a.type, data: e.getResult() })
                }
            }
        } 
    }
}
