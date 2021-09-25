import { createSlice } from '@reduxjs/toolkit';
import RoomModel from '../../models/RoomModel';
import RoomTypeModel from '../../models/RoomTypeModel';
import { _, L } from '../../utils/Fx';

const name = 'room';

const initialState = {
    selectedRoomType: 'NORMAL', 
    selectedRoomTypeName: '1:1',
    selectedRoomName: '',
    bookmarks: [],
    primary: [],
    types: [],
};

const roomSlice = createSlice({
    name, 
    initialState,
    reducers : {
        
        create(state) {
        },

        createSuccess(state, action) {
            // state.rooms.concat(...action.payload);
        },

        createFailure(state) {
            
        },
        
        remove(state) {
        },

        removeSuccess(state, action) {
            // state.rooms.filter(room => room.id !== action.payload)
        },

        removeFailure(state) {

        },

        list(state) {
            
        },

        listSuccess(state, action) {
            
            const partitionRooms = _.go(
                action.data,
                _.map(room => new RoomModel(room)),
                _.partitionBy(room => (room.isBookMark ? "bookmarks" : "primary"))
            )

            return {
                ...state,
                ...partitionRooms,
            }

        },

        listFailure(state) {

        },

        types(state) {

        },

        typesSuccess(state, action) {
            const types = action.data.map((type, index) => new RoomTypeModel({...type, index}));
            types[0].select();

            return {
                ...state,
                types,
            }
        },

        typesFailure(state) {

        },

        selectedRoomType(state, action) {

            const selectedRoomType = action.payload;            
            const matchRoomType = type => selectedRoomType === type.roomType;            
            
            let types = state.types.map(type => new RoomTypeModel({...type, selected: false}));
            const selectedRoomTypeObj = types.find(matchRoomType);
            selectedRoomTypeObj.select();
            
            return {
                ...state, 
                selectedRoomType: selectedRoomType,
                selectedRoomTypeName: selectedRoomTypeObj.roomTypeName,
                types,
            }
        },

        selectedRoom(state, action) {

            return {
                ...state,
                selectedRoomName: action.payload,
            }
        }

    }
})

export const { 
    create, createSuccess, createFailure, 
    remove, removeSuccess, removeFailure, 
    list, listSuccess, listFailure,
    types, typesSuccess, typesFailure, 

    selectedRoom, selectedRoomType
} = roomSlice.actions;
export default roomSlice;
