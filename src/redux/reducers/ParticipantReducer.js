import { createSlice } from "@reduxjs/toolkit";
import ParticipantModel from "../../models/ParticipantModel";

const name = "participant";

const initialState = {
    participants: [],
    participantId: 0,
}

const setParticipantInfo = (state, action) => {

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
        
        participants(state, action) {
        },

        participantsSuccess(state, action) {

            const participants = action.data;
            participants.map((participant) => new ParticipantModel(participant));
     
            return {
                ...state,
                participants,
            }
        },

        addBookMarkToRoom(state, action) {
            action.payload = setParticipantInfo(state, action);
        },

        deleteBookMarkToRoom(state, action) {
            action.payload = setParticipantInfo(state, action);
        },

        addAlarmToRoom(state, action) {
            action.payload = setParticipantInfo(state, action);
        },

        deleteAlarmToRoom(state, action) {
            action.payload = setParticipantInfo(state, action);
        },
        
    },
})

export const {
    participants, participantsSuccess, participantFailure,
    addBookMarkToRoom, deleteBookMarkToRoom, 
    addAlarmToRoom, deleteAlarmToRoom, 
} = participantSlice.actions;

export default participantSlice;