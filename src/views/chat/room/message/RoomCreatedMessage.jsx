
import styled from "styled-components";

const RoomCreatedMessage = () => {

    return (
        <StyledRoomCreatedMessage>
            <StyledNameBlue>1:1 대화방</StyledNameBlue>
            이 생성되었습니다.
            2018-10-17 19:20 by
            <StyledNameBlue> 이정환 </StyledNameBlue>
        </StyledRoomCreatedMessage>
    ); 
}

const StyledRoomCreatedMessage = styled.div `
    margin-top: 18px;
    margin-bottom: 18px;
    text-align: center;
    font-size: 13px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    background: #dfe0de;
`

const StyledNameBlue = styled.span `
    font-weight: 500;
    color: #1c90fb;
`

export default RoomCreatedMessage;