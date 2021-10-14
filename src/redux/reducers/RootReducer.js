import { combineReducers } from 'redux';
import cmmnReducer from './CmmnReducer';
import roomReducer from './RoomReducer';
import participantReducer from './ParticipantReducer';

export const rootReducer = combineReducers({
    cmmn: cmmnReducer.reducer,
    rooms: roomReducer.reducer,
    pariticipants: participantReducer.reducer,
});
