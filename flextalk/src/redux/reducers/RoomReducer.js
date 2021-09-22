import { createSlice } from '@reduxjs/toolkit';

const name = 'room';

const initialState = { 
    rooms: [] 
};

const roomSlice = createSlice({
    name, 
    initialState,
    reducers : {
        create(state, action) {
            state.rooms.push(...action.payload);
        },
        
        leave(state, action) {

        },

        list(state) {
            state.rooms.push(...action.payload);
        }
    }
})

export const { create, leave, list } = roomSlice.actions;
export default roomSlice.reducer;
