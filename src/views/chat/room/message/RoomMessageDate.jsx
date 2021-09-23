
import styled from "styled-components"

const RoomMessageDate = () => {

    return (
        <StyledRoomMessageDate>
            <StyledRoomDateLine />
            <StyledRoomDateText>2020-02-29</StyledRoomDateText>
        </StyledRoomMessageDate>

    )
}

const StyledRoomMessageDate = styled.div `
    position: relative;
    text-align: center;
    margin-top: 22px;
    margin-bottom: 28px;
`

const StyledRoomDateLine = styled.span `
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: #cfd3dc;
    margin-top: 1px;
    overflow: hidden;
    z-index: 10;
    text-indent: -9999em;
`

const StyledRoomDateText = styled.span `
    position: relative;
    padding: 3px 20px;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif;
    border-radius: 25px;
    background: #afb8c6;
    z-index: 15;
    color: #fff;
`

export default RoomMessageDate