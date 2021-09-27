import { createSlice } from "@reduxjs/toolkit";

const name = "cmmn";

const initialState = {
    loading: false,
    createPopupView: false,
    participantsPopupView: false,    
    inviteParticipantPopupView: false,
    deportParticipnatPopupView: false,
    displayFilesPopupView: false,
}

const cmmnSlice = createSlice({
    name,
    initialState,
    reducers: {

        loader(state, action) {
            return {
                ...state,
                loading: true,
            }
        },

        closing(state, action) {
            return {
                ...state,
                loading: false,
            }
        },

        createPopupOpen(state) {
            return {
                ...state,
                createPopupView: true,
            }
        },

        createPopupClose(state) {
            return {
                ...state,
                createPopupView: false,
            }
        },

        participantsPopupOpen(state) {
            return {
                ...state,
                participantsPopupView: true,
            }
        },

        participantsPopupClose(state) {
            return {
                ...state,
                participantsPopupView: false,
            }
        },

        inviteParticipantPopupOpen(state) {
            return {
                ...state,
                inviteParticipantPopupView: true,
            }
        },

        inviteParticipantPopupClose(state) {
            return {
                ...state,
                inviteParticipantPopupView: false,
            }
        },

        deportParticipantPopupOpen(state) {
            return {
                ...state,
                deportParticipnatPopupView: true,
            }
        },

        deportParticipantPopupClose(state) {
            return {
                ...state,
                deportParticipnatPopupView: false,
            }
        },

        displayFilesPopupOpen(state) {
            return {
                ...state,
                displayFilesPopupView: true,
            }
        },

        displayFilesPopupClose(state) {
            return {
                ...state,
                displayFilesPopupView: false,
            }
        },

    },
});

export const {
    loader, closing,
    createPopupOpen, createPopupClose,
    participantsPopupOpen, participantsPopupClose,
    inviteParticipantPopupOpen, inviteParticipantPopupClose,
    deportParticipantPopupOpen, deportParticipantPopupClose,
    displayFilesPopupOpen, displayFilesPopupClose,

} = cmmnSlice.actions;

export default cmmnSlice;