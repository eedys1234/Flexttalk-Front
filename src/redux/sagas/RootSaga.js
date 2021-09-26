import { all, fork } from 'redux-saga/effects';

import participantSaga from './ParticipantSaga.js';
import roomSaga from './RoomSaga.js';

export default function* rootSaga() {
    yield all([
        fork(roomSaga),
        fork(participantSaga),
    ]);
}