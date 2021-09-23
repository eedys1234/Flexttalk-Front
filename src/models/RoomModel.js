
export default class RoomModel {
    constructor(roomId, roomName, roomType, roomLimitCount, isAlarm, isBookMark, isOwner) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.roomType = roomType;
        this.roomLimitCount = roomLimitCount;
        this.isAlarm = isAlarm;
        this.isBookMark = isBookMark;
        this.isOwner = isOwner;
    }
}