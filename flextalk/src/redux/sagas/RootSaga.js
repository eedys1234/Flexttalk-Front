import { all, fork } from 'redux-saga/effects';

import MessageSaga from './MessagaSaga.js';
import ParticipantSaga from './ParticipantSaga.js';
import RoomSaga from './RoomSaga.js';
import UserSaga from './UserSaga.js';

export default function* rootSaga() {
    yield all([fork(RoomSaga)]);
}