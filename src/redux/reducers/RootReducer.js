import { combineReducers } from 'redux';
import roomReducer from './RoomReducer';
import participantReducer from './ParticipantReducer';

export const rootReducer = combineReducers({
    rooms: roomReducer.reducer,
    pariticipant: participantReducer.reducer,
});
