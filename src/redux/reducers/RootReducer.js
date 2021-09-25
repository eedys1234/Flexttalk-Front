import { combineReducers } from 'redux';
import roomReducer from './RoomReducer';

export const rootReducer = combineReducers({
    rooms: roomReducer.reducer,
});
