import { all, fork } from 'redux-saga/effects';

import cmmnSaga from './CmmnSaga.js';
import roomSaga from './RoomSaga.js';
import participantSaga from './ParticipantSaga.js';

export default function* rootSaga() {
    yield all([
        fork(cmmnSaga),
        fork(roomSaga),
        fork(participantSaga),
    ]);
}