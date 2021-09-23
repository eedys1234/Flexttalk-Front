
import ChatContainer from "./chat/ChatContainer";
import InputMessageArea from "./chat/InputMessageArea";
import MoveRecentlyMessageArea from "./chat/MoveRecentlyMessageArea";

import styled from "styled-components";

const RoomContainer = () => {
    return (
        <StyledRoomContainer>
            <ChatContainer></ChatContainer>
            <MoveRecentlyMessageArea></MoveRecentlyMessageArea>
            <InputMessageArea></InputMessageArea>
        </StyledRoomContainer>
    );
}

const StyledRoomContainer = styled.div `
    position: absolute;
    top: 48px;
    left: 320px;
    bottom: 0;
    right: 0;
`


export default RoomContainer;