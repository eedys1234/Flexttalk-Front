import { createSlice } from '@reduxjs/toolkit';
import RoomModel from '../../models/RoomModel';
import RoomTypeModel from '../../models/RoomTypeModel';
import { _, L } from '../../utils/Fx';
import { kmp } from '../../utils/SearchUtil';

const name = 'room';

const initialState = {
    keyword: '',
    selectedRoomType: 'NORMAL', 
    selectedRoomTypeName: '1:1',
    selectedRoom: {},
    searchBookmarks: [],
    searchPrimary: [],
    orgBookmarks: [],
    orgPrimary: [],
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
                _.partitionBy(room => (room.isBookMark ? "orgBookmarks" : "orgPrimary"))
            )
            
            const selectedRoom = [...partitionRooms.orgBookmarks, ...partitionRooms.orgPrimary][0];
            
            selectedRoom.select();

            return {
                ...state,
                ...partitionRooms,
                searchBookmarks: partitionRooms.orgBookmarks,
                searchPrimary: partitionRooms.orgPrimary,
                selectedRoom,
                keyword: '',
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

        selectRoomType(state, action) {

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

        selectRoom(state, action) {

            const selectedRoom = action.payload;
                    
            const roomCondition = room => selectedRoom.roomId === room.roomId;
            const select = room => roomCondition(room) ? new RoomModel({...room, selected: true}) 
            : room.selected ? { ...room, selected: false} : room;
            
            const orgBookmarks = state.orgBookmarks.map(select);
            const orgPrimary = state.orgPrimary.map(select);
            const searchBookmarks = state.searchBookmarks.map(select);
            const searchPrimary = state.searchPrimary.map(select);

            const nextRoom = selectedRoom.isBookMark ? orgBookmarks.find(roomCondition) : orgPrimary.find(roomCondition);

            return {
                ...state,
                orgBookmarks,
                orgPrimary,
                searchBookmarks,
                searchPrimary,
                selectedRoom: nextRoom,
            };
        },

        searchRoom(state, action) {

            const keyword = action.payload;
            let filterOrgRooms = [...state.orgBookmarks, ...state.orgPrimary]
            .filter((room) => kmp(room.roomName, keyword));

            filterOrgRooms = _.go(filterOrgRooms,
                _.partitionBy(room => (room.isBookMark ? "orgBookmarks" : "orgPrimary"))
            );

            return {
                ...state,
                keyword,
                searchBookmarks: filterOrgRooms.orgBookmarks || [],
                searchPrimary: filterOrgRooms.orgPrimary || [],
            }
        },

    }
})

export const { 
    create, createSuccess, createFailure, 
    remove, removeSuccess, removeFailure, 
    list, listSuccess, listFailure,
    types, typesSuccess, typesFailure, 
    
    selectRoom, selectRoomType, searchRoom
} = roomSlice.actions;

export default roomSlice;
