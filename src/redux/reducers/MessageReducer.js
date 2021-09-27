import { createSlice } from "@reduxjs/toolkit";

const name = "message";

const initialState = {

};

const messageSlice = createSlice({
    name,
    initialState,
    reducers: {
        
        displayFiles(state) {

        },

        displayFilesSuccess(state, action) {

        },
    }
});

export const {
    displayFiles, displayFilesSuccess,
} = messageSlice.actions;

export default messageSlice;