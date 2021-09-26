import { createSlice } from "@reduxjs/toolkit";

const name = "participant";

const initialState = {
    participants: [],
    participantId: 0,
}

const participantSetting = (state, action) => {

    const selectedRoom = action.payload;
           
    return {
        selectedRoom,
        participantId: state.participantId,
    }
}

const participantSlice = createSlice({
    name,
    initialState,
    reducers: {

        addBookMarkToRoom(state, action) {
            action.payload = participantSetting(state, action);
        },

        deleteBookMarkToRoom(state, action) {
            action.payload = participantSetting(state, action);
        },

        addAlarmToRoom(state, action) {
            action.payload = participantSetting(state, action);
        },

        deleteAlarmToRoom(state, action) {
            action.payload = participantSetting(state, action);
        },
        
    },
})

export const {
    addBookMarkToRoom, 
    deleteBookMarkToRoom, 
    addAlarmToRoom,
    deleteAlarmToRoom, 
} = participantSlice.actions;

export default participantSlice;