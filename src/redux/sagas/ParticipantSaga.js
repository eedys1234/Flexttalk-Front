import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import { addBookMarkToRoom, deleteBookMarkToRoom, addAlarmToRoom, deleteAlarmToRoom } from '../reducers/ParticipantReducer';
import { setBookMarkToRoomSuccess, setAlarmToRoomSuccess } from '../reducers/RoomReducer';
import ParticipantApi from '../../api/ParticipantApi'
import { createSaga, createActions } from "../../utils/SagaUtil";


const addBookMarkToRoomActions = createActions(addBookMarkToRoom.type);
const addBookMarkToRoomRequest = createSaga(addBookMarkToRoomActions, ParticipantApi.addBookMarkToRoom, setBookMarkToRoomSuccess);

function* watchAddBookMarkToRoom() {
    yield takeLatest(addBookMarkToRoom.type, addBookMarkToRoomRequest);
}  

const deleteBookMarkToRoomActions = createActions(deleteBookMarkToRoom.type);
const deleteBookMarkToRoomRequest = createSaga(deleteBookMarkToRoomActions, ParticipantApi.deleteAlarmToRoom, setBookMarkToRoomSuccess);

function* watchDeleteBookMarkToRoom() {
    yield takeLatest(deleteBookMarkToRoom.type, deleteBookMarkToRoomRequest);
}

const addAlarmToRoomActions = createActions(addAlarmToRoom.type);
const addAlarmToRoomRequest = createSaga(addAlarmToRoomActions, ParticipantApi.addAlarmToRoom, setAlarmToRoomSuccess);

function* watchAddAlarmToRoom() {
    yield takeLatest(addAlarmToRoom.type, addAlarmToRoomRequest);
}

const deleteAlarmToRoomActions = createActions(deleteAlarmToRoom.type);
const deleteAlarmToRoomRequest = createSaga(deleteAlarmToRoomActions, ParticipantApi.deleteAlarmToRoom, setAlarmToRoomSuccess);

function* watchDeleteAlarmToRoom() {
    yield takeLatest(deleteAlarmToRoom.type, deleteAlarmToRoomRequest);
}

export default function* participantSaga() {
    yield all([
        fork(watchAddBookMarkToRoom),
        fork(watchDeleteBookMarkToRoom),
        fork(watchAddAlarmToRoom),
        fork(watchDeleteAlarmToRoom),
    ])
}