
export default class RoomModel {
    constructor(roomId, roomName, roomType, roomLimitCount, isAlarm = true, isBookMark = false, isOwner = true) {

        this.roomId = roomId;
        this.messages = {
            // requiredRoomName: '채팅방 이름은 필수값입니다.',
            requiredRoomType: '채팅방 Type을 필수값입니다.',
        };

        // if(!roomName) {
        //     throw new Error(this.messages.requiredRoomName);
        // }
        this.roomName = roomName;

        if(!roomType) {
            throw new Error(this.messages.requiredRoomType);
        }
        this.roomType = roomType;

        this.roomLimitCount = roomLimitCount;
        this.isAlarm = isAlarm;
        this.isBookMark = isBookMark;
        this.isOwner = isOwner;
    }




}