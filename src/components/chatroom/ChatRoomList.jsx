import ChatRoomItem from './ChatRoomItem';
import { go, lmap } from '../../utils/fx';
import styled from 'styled-components';
const ChatRoomList = ({rooms}) => (

    <StyledChatRoomList>
    {
        // go(rooms, lmap(createChatRoomItem)) 
    }
    </StyledChatRoomList>
);

const createChatRoomItem = ({room}) => {
    return <ChatRoomItem 
                room={room}
            />
}

const StyledChatRoomList = styled.ul `
    border-bottom: 1px solid #e5e5e5;
`

export default ChatRoomList;