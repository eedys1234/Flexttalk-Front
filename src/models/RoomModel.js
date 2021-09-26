
export default class RoomModel {

    constructor(room) {

        this.roomId = room.room_id || room.roomId;
        this.roomName = room.room_name || room.roomName;

        this.roomType = room.room_type || room.roomType;
        
        if(!this.roomType) {
            throw new Error(this.messages.requiredRoomType);
        }

        this.roomLimitCount = room.room_limit_count || room.roomLimitCount;
        this.isAlarm = room.is_alarm || room.isAlarm;
        this.isBookMark = room.is_bookmark || room.isBookMark;
        this.isOwner = room.is_owner || room.isOwner || false;
        this.selected = room.selected || false;
    }

    select() {
        this.selected = true;
    }

    unSelect() {
        this.selected = false;
    }

    toJSON() {
        
    }
}

RoomModel.prototype.messages = {
    // requiredRoomName: '채팅방 이름은 필수값입니다.',
    requiredRoomType: '채팅방 Type을 필수값입니다.',
};
