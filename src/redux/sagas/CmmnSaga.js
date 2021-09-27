import { all, fork, takeLatest } from 'redux-saga/effects';

import { createActions, createSaga } from '../../utils/SagaUtil'; 
import { users } from '../reducers/UseReducer';
import { participants } from '../reducers/ParticipantReducer';
import { displayFiles } from '../reducers/MessageReducer';
import { participantsPopupOpen, inviteParticipantPopupOpen, deportParticipantPopupOpen, displayFilesPopupOpen, closing } from '../reducers/CmmnReducer';

import UserApi from '../../api/UserApi';
import ParticipantApi from '../../api/ParticipantApi';
import MessageApi from '../../api/MessageApi';

const participantsPopupOpenActions = createActions(participants.type);
const participantsPopupOpenRequest = createSaga(participantsPopupOpenActions, ParticipantApi.participants, false, false, [closing]);

function* watchParticipantsPopupOpen() {
    yield takeLatest(participantsPopupOpen.type, participantsPopupOpenRequest);
}

const inviteParticipantPopupOpenActions = createActions(users.type);
const inviteParticipantPopupOpenRequest = createSaga(inviteParticipantPopupOpenActions, UserApi.users, false, false, [closing]);

function* watchInviteParticipantPopupOpen() {
    yield takeLatest(inviteParticipantPopupOpen.type, inviteParticipantPopupOpenRequest);
}

const deportParticipantPopupOpenActions = createActions(participants.type);
const deportParticipantPopupOpenRequest = createSaga(deportParticipantPopupOpenActions, ParticipantApi.participants, false, false, [closing]);

function* watchDeportParticipantPopupOpen() {
    yield takeLatest(deportParticipantPopupOpen.type, deportParticipantPopupOpenRequest);
}

const displayFilesPopupOpenActions = createActions(displayFiles.type);
const displayFilesPopupOpenRequest = createSaga(displayFilesPopupOpenActions, MessageApi.files, false, false, [closing]);

function* watchDisplayFilesPopupOpen() {
    yield takeLatest(displayFilesPopupOpen.type, displayFilesPopupOpenRequest);
}

export default function* cmmnSaga() {
    yield all([
        fork(watchParticipantsPopupOpen),
        fork(watchInviteParticipantPopupOpen),
        fork(watchDeportParticipantPopupOpen),
        fork(watchDisplayFilesPopupOpen),
    ])
}
