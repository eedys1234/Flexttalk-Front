
const ChatRoomItem = () => (

    <li class="group_box">
        <a href="#" class="text">
            <div class="img_thum">
                <div class="pic_wrap">
                    <span class="use_member"></span>
                    <span class="use_member"></span>
                    <span class="use_member"></span>
                    <span class="use_member"></span>
                </div>
            </div>
            <div class="ellipsis_text_wrap">
                <em class="left_text">WEHAGO 팩스 서비스</em>
                <span class="right_text member_count">(10)</span>
            </div>
        </a>
        <button type="button" class="btn_bookmark">
            <span class="ic_bookmark"></span>
        </button>
        <div class="alaram_bx">
            <button type="button" class="btn_alaram">
                <span class="ic_alaram"></span>
            </button>
        </div>
    </li>
)

export default ChatRoomItem;