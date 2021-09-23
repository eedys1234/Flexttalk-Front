
import RoomMessage from "./RoomMessage";
import styled from "styled-components";

const RoomMyMessageArea = ({messageOwner = true}) => {
    return (
    <StyledRoomMyMessageArea>
        <RoomMessage
            messageOwner={messageOwner}
        >
        </RoomMessage>
    </StyledRoomMyMessageArea>

    );
}

const StyledRoomMyMessageArea = styled.div `
    position: relative;
    padding-top: 4px;
    margin-bottom: 8px;
    padding-left: 25px;
    text-align: right;
`


export default RoomMyMessageArea;