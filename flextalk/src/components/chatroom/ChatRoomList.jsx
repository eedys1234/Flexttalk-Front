import ChatRoomItem from './ChatRoomItem';
import { go, lmap } from '../../utils/fx';

const ChatRoomList = ({rooms}) => (

    <ul class="chatgroup_list">
        {
            go(rooms, lmap(createChatRoomItem)) 
        }
    </ul>

);

const createChatRoomItem = ({room}) => {
    return <ChatRoomItem 
                room={room}
            />
}

export default ChatRoomList;