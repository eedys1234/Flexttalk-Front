import { createSlice } from '@reduxjs/toolkit';

const name = 'room';

const initialState = { 
    rooms: [] 
};

const roomSlice = createSlice({
    name, 
    initialState,
    reducers : {
        
        create(state) {
        },

        createSuccess(state, action) {
            state.rooms.push(...action.payload);
        },

        createFailure(state) {
            
        },
        
        remove(state) {
        },

        removeSuccess(state, action) {
            //삭제 기능 개발필요
        },

        removeFailure(state) {

        },

        list(state) {
            
        },

        listSuccess(state, action) {
            state.rooms.push(...action.data);
        },

        listFailure(state) {

        },
    }
})

export const { create, remove, list, listSuccess, listFailure } = roomSlice.actions;
export default roomSlice.reducer;
