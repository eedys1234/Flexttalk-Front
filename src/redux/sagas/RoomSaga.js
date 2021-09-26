import { all, fork, takeLatest } from 'redux-saga/effects';

import { create, remove, list, types, selectRoomType } from '../reducers/RoomReducer';
import RoomApi from '../../api/RoomApi'
import { createSaga, createActions } from '../../utils/SagaUtil';

const createRoomActions = createActions(create.type);
const createRoomRequest = createSaga(createRoomActions, RoomApi.createRoom);

function* watchCreateRoom() {
    yield takeLatest(create.type, createRoomRequest)
}

const typesActions = createActions(types.type);
const typesRequest = createSaga(typesActions, RoomApi.types);

function* watchTypes() {
    yield takeLatest(types.type, typesRequest);
}

const removeRoomActions = createActions(remove.type);
const removeRoomRequest = createSaga(removeRoomActions, RoomApi.removeRoom);

function* watchRemoveRoom() {
    yield takeLatest(remove.type, removeRoomRequest);
}

const listActions = createActions(list.type);
const listRequest = createSaga(listActions, RoomApi.list);

function* watchList() {
    yield takeLatest(list.type, listRequest);
}

const selectRoomTypeActions = createActions(list.type);
const selectRoomTypeRequest = createSaga(selectRoomTypeActions, RoomApi.list);

function* watchSelectRoomType() {
    yield takeLatest(selectRoomType.type, selectRoomTypeRequest);
}

export default function* roomSaga() {
    yield all([
        fork(watchCreateRoom),
        fork(watchRemoveRoom),
        fork(watchList),
        fork(watchTypes),
        fork(watchSelectRoomType),
    ])
}