
export default class RoomModel {
    constructor({room_id, room_name, room_type, room_limit_count, is_alarm = true, is_bookmark = false, is_owner = true}) {

        this.roomId = room_id;
        this.messages = {
            // requiredRoomName: '채팅방 이름은 필수값입니다.',
            requiredRoomType: '채팅방 Type을 필수값입니다.',
        };

        this.roomName = room_name;

        if(!room_type) {
            throw new Error(this.messages.requiredRoomType);
        }
        this.roomType = room_type;

        this.roomLimitCount = room_limit_count;
        this.isAlarm = is_alarm;
        this.isBookMark = is_bookmark;
        this.isOwner = is_owner;
    }




}