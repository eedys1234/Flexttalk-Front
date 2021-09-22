import { all, fork, put, call, takeLatest } from 'redux-saga/effects';

import RoomApi from '../../api/RoomApi'
import { createSaga } from '../../utils/SagaUtil';

const createRoomAction = (isStatus) => isStatus === 0 ? "CREATE_ROOM_SUCCESS" : "CREATE_ROOM_FAILURE";
const createRoomRequest = createSaga(createRoomAction, RoomApi.createRoom);

function* watchCreateRoom() {
    yield takeLatest(createRoomAction, RoomApi.createRoom)
}

const deleteRoomAction = (isStatus) => isStatus === 0 ? "DELETE_ROOM_SUCCESS" : "DELETE_ROOM_FAILURE";
const deleteRoomRequest = createSaga(deleteRoomAction, RoomApi.deleteRoom);

function* watchDeleteRoom() {
    yield takeLatest(deleteRoomAction, RoomApi.deleteRoom);
}

const listAction = (isStatus) => isStatus === 0 ? "LIST_SUCCESS" : "LIST_FAILURE";
const listRequest = createSaga(listAction, RoomApi.list);

function* watchList() {
    yield takeLatest(listAction, RoomApi.list);
}

export default function* roomSaga() {
    yield all([
        fork(watchCreateRoom),
        fork(watchDeleteRoom),
        fork(watchList),
    ])
}