import { all, fork, takeLatest } from 'redux-saga/effects';

import { users } from '../reducers/UseReducer';
import { createSaga, createActions } from '../../utils/SagaUtil';
import { closing } from '../reducers/CmmnReducer';
import UserApi from '../../api/UserApi';

const usersActions = createActions(users.type);
const usersRequest = createSaga(usersActions, UserApi.users, false, false, [closing]);

function* watchUsers() {
    yield takeLatest(users.type, usersRequest);
}

export default function* userSaga() {
    yield all([
        fork(watchUsers),
    ])
}