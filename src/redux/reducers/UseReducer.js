import { createSlice } from "@reduxjs/toolkit";

const name = 'user';

const initialState = {

};

const userSlice = createSlice({
    name,
    initialState,
    reducers: {

        users(state, action) {
            
        },

        usersSuccess(state, action) {

        },
    }
});

export const {
    users,
} = userSlice.actions;

export default userSlice;