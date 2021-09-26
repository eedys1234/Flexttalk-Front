import { createSlice } from "@reduxjs/toolkit";

const name = "participant";

const initialState = {
    participants: [],
    participantId: 0,
}

const participantSlice = createSlice({
    name,
    initialState,
    reducers: {

        addBookMarkToRoom(state, action) {

            const selectedRoom = action.payload;
            
            action.payload = {
                selectedRoom,
                participantId: state.participantId,
            }
        },

        deleteBookMarkToRoom(state, action) {

            const selectedRoom = action.payload;
            
            action.payload = {
                selectedRoom,
                participantId: state.participantId,
            }
        },

        addAlarmToRoom(state, action) {

            const selectedRoom = action.payload;
            
            action.payload = {
                selectedRoom,
                participantId: state.participantId,
            }

        },

        deleteAlarmToRoom(state, action) {
            
            const selectedRoom = action.payload;
            
            action.payload = {
                selectedRoom,
                participantId: state.participantId,
            }

        },
        
    },
})

export const {
    addBookMarkToRoom, addBookMarkToRoomSuccess, addBookMarkToRoomFailure,
    deleteBookMarkToRoom, deleteBookMarkToRoomSuccess, deleteBookMarkToRoomFailure,
    addAlarmToRoom, addAlarmToRoomSuccess, addAlarmToRoomFailure,
    deleteAlarmToRoom, 
} = participantSlice.actions;

export default participantSlice;