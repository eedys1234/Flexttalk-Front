import RoomMyMessageArea from "../message/RoomMyMessageArea";
import RoomMessageArea from "../message/RoomMessageArea";
import RoomCreatedMessage from "../message/RoomCreatedMessage";
import RoomMessageDate from "../message/RoomMessageDate";
import styled from "styled-components";

const ChatContainer = () => {

    return (
            <StyledChatContainer>
                <RoomCreatedMessage></RoomCreatedMessage>
                <RoomMyMessageArea
                ></RoomMyMessageArea>
                <RoomMessageDate></RoomMessageDate>
                <RoomMessageArea></RoomMessageArea>
                <RoomMessageArea></RoomMessageArea>
            </StyledChatContainer>
    )
}

const StyledChatContainer = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 81px;
    padding: 10px 20px;
    padding-top: 30px;
    background: #dfe0e4;
    overflow: hidden;
    overflow-y: auto;
`

export default ChatContainer;