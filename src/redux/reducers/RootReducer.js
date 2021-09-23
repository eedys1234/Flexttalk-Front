import { combineReducers } from 'redux';
import RoomReducer from './RoomReducer';

const RootReducer = combineReducers({
    RoomReducer,
});

export default RootReducer;