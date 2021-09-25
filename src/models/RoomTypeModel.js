
export default class RoomTypeModel {

    constructor(type) {
        
        this.roomType = type.room_type || type.roomType;
        this.roomTypeName = type.room_type_name || type.roomTypeName;
        this.alarmCount = type.alarm_count || type.alarmCount;
        this.selected = type.selected || false;
        this.index = type.index || 0;
    }

    updateCount(alarmCount) {
        this.alarmCount = alarmCount;
    }

    select() {
        this.selected = true;
    }

    unSelect() {
        this.selected = false;
    }

}