import { call, put } from 'redux-saga/effects';

export const createActions = (type) => () => { 
    return {
            success: `${type}Success`, 
            failure: `${type}Failure` 
    }
} 

export const createSaga = (actionCreateFunc, callApi, ...iter) => {

    const { success, failure } = actionCreateFunc();
    
    return function* (action) {

        try {
            const { result } = yield call(callApi, action.payload);
            yield put({ type: success, data: result })
            
            if(iter) {
                for(const a of iter) {
                    yield put({ type: a.type, payload: action.payload});
                }
            }
        } catch(e) {
            yield put({ type: failure, data: e.getResult() })
        } 
    }
} 

// export const createSaga = (actionCreateFunc, callApi, ...actionType) => {

//     const { success, failure } = actionCreateFunc();

//     return function* (action) {

//         try {
//             const { result } = yield call(callApi, action.payload);
//             yield put({ type: success, data: result });

//             for(const a of actionType) {
//                 yield put({ type: a.type, payload: action.payload});
//             }
//         }
//         catch(e) {
//             yield put({ type: failure, data: e.getResult() });
//         }
//     }
// }