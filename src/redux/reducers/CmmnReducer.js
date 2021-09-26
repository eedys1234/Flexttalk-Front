import { createSlice } from "@reduxjs/toolkit";

const name = "cmmn";
const initialState = {
    loading: false,
}

const cmmnSlice = createSlice({
    name,
    initialState,

    reducers: {
        loader(state, action) {
            return {
                ...state,
                loading: action.payload
            }
        }
    },
});

export const {
    loader,

} = cmmnSlice.actions;

export default cmmnSlice;