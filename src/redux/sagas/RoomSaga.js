import { all, fork, takeLatest } from 'redux-saga/effects';
import { create, remove, rooms, types, selectRoomType } from '../reducers/RoomReducer';
import { createSaga, createActions } from '../../utils/SagaUtil';
import { closing } from '../reducers/CmmnReducer';
import RoomApi from '../../api/RoomApi'

const typesActions = createActions(types.type);
const typesRequest = createSaga(typesActions, RoomApi.types, false, false, [closing]);

function* watchTypes() {
    yield takeLatest(types.type, typesRequest);
}

const createRoomActions = createActions(rooms.type);
const createRoomRequest = createSaga(createRoomActions, RoomApi.createRoom, false, false, [closing]);

function* watchCreateRoom() {
    yield takeLatest(create.type, createRoomRequest)
}

const removeRoomActions = createActions(rooms.type);
const removeRoomRequest = createSaga(removeRoomActions, RoomApi.removeRoom, false, false, [closing]);

function* watchRemoveRoom() {
    yield takeLatest(remove.type, removeRoomRequest);
}

const roomsActions = createActions(rooms.type);
const roomsRequest = createSaga(roomsActions, RoomApi.rooms, false, false, [closing]);

function* watchRooms() {
    yield takeLatest(rooms.type, roomsRequest);
}

const selectRoomTypeActions = createActions(rooms.type);
const selectRoomTypeRequest = createSaga(selectRoomTypeActions, RoomApi.rooms, false, false, [closing]);

function* watchSelectRoomType() {
    yield takeLatest(selectRoomType.type, selectRoomTypeRequest);
}

export default function* roomSaga() {
    yield all([
        fork(watchCreateRoom),
        fork(watchRemoveRoom),
        fork(watchRooms),
        fork(watchTypes),
        fork(watchSelectRoomType),
    ])
}