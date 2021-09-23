
import RoomMessage from "./RoomMessage";

import styled from "styled-components";

const RoomMessageArea = ({messageOwner = false, isFile}) => {

    return (
        <StyledRoomMessageArea>  
            <StyledProfileBtn>
                <StyledProfileImg>
                    <span className="sp_ic ic_profile" />
                </StyledProfileImg>
            </StyledProfileBtn>          
            <RoomMessage
                isFile={isFile}
            >
            </RoomMessage>
        </StyledRoomMessageArea>
    );
}

const StyledRoomMessageArea = styled.div `
    position: relative;
    padding-top: 4px;
    margin-bottom: 8px;
    padding-left: 25px;
`

const StyledProfileBtn = styled.button `
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: inline-block;
    width: auto;
    border: none;
    background: 0 0;
    outline: 0;
    box-sizing: border-box;
    cursor: pointer;
`

const StyledProfileImg = styled.div `
    position: relative;
    overflow: hidden;
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

export default RoomMessageArea;