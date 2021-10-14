import { createSlice } from "@reduxjs/toolkit";
import ParticipantModel from "../../models/ParticipantModel";
import { L, _ } from "../../utils/Fx";
import { kmp } from "../../utils/SearchUtil";

const name = "participant";

const initialState = {
    orgParticipants: [],
    searchParticipants: [],
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

            const orgParticipants = action.data.map((participant) => new ParticipantModel(participant));
     
            return {
                ...state,
                orgParticipants,
                searchParticipants: orgParticipants,
            }
        },
        
        search(state, action) {
            
            const keyword = action.payload;
            
            const searchParticipants = _.go(
                state.orgParticipants,
                L.filter((participant) => kmp(participant.userEmail, keyword)),
                _.take(10),
            )

            return {
                ...state,
                searchParticipants,
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
    search,
} = participantSlice.actions;

export default participantSlice;