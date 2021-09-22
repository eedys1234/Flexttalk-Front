
const ChatRoomBox = ({rooms, }) => {

    const roomsCount = rooms ? rooms.length : 0;

    <div class="chatgroup_box close">
        <div class="chatgroup_box_title">
            <a class="title" href="#">
                <span>
                    즐겨찾는 목록(<span class="number">{roomsCount}</span>)
                </span>
                <i class="sp_ic"></i>
            </a>
        </div>

    </div>

}

export default ChatRoomBox;