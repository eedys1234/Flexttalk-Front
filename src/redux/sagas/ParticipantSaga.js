import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import { addBookMarkToRoom, deleteBookMarkToRoom, addAlarmToRoom, deleteAlarmToRoom, participants } from '../reducers/ParticipantReducer';
import { closing } from '../reducers/CmmnReducer';
import { setBookMarkToRoomSuccess, setAlarmToRoomSuccess } from '../reducers/RoomReducer';
import { createSaga, createActions } from "../../utils/SagaUtil";
import ParticipantApi from '../../api/ParticipantApi';

const participantsActions = createActions(participants.type);
const participantsRequest = createSaga(participantsActions, ParticipantApi.participants);

function* watchParticipants() {
    yield takeLatest(participants.type, participantsRequest);
}

const addBookMarkToRoomActions = createActions(addBookMarkToRoom.type);
const addBookMarkToRoomRequest = createSaga(addBookMarkToRoomActions, ParticipantApi.addBookMarkToRoom, false, [setBookMarkToRoomSuccess], [closing]);

function* watchAddBookMarkToRoom() {
    yield takeLatest(addBookMarkToRoom.type, addBookMarkToRoomRequest);
}  

const deleteBookMarkToRoomActions = createActions(deleteBookMarkToRoom.type);
const deleteBookMarkToRoomRequest = createSaga(deleteBookMarkToRoomActions, ParticipantApi.deleteAlarmToRoom, false, [setBookMarkToRoomSuccess], [closing]);

function* watchDeleteBookMarkToRoom() {
    yield takeLatest(deleteBookMarkToRoom.type, deleteBookMarkToRoomRequest);
}

const addAlarmToRoomActions = createActions(addAlarmToRoom.type);
const addAlarmToRoomRequest = createSaga(addAlarmToRoomActions, ParticipantApi.addAlarmToRoom, false, [setAlarmToRoomSuccess], [closing]);

function* watchAddAlarmToRoom() {
    yield takeLatest(addAlarmToRoom.type, addAlarmToRoomRequest);
}

const deleteAlarmToRoomActions = createActions(deleteAlarmToRoom.type);
const deleteAlarmToRoomRequest = createSaga(deleteAlarmToRoomActions, ParticipantApi.deleteAlarmToRoom, false, [setAlarmToRoomSuccess], [closing]);

function* watchDeleteAlarmToRoom() {
    yield takeLatest(deleteAlarmToRoom.type, deleteAlarmToRoomRequest);
}

export default function* participantSaga() {
    yield all([
        fork(watchParticipants),
        fork(watchAddBookMarkToRoom),
        fork(watchDeleteBookMarkToRoom),
        fork(watchAddAlarmToRoom),
        fork(watchDeleteAlarmToRoom),
    ])
}