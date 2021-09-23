
import styled from "styled-components";

const ChatRoomBox = ({title, rooms, opened}) => {

    const roomsCount = rooms ? rooms.length : 0;

    return(
    <StyledChatRoomBox
        opened={opened}
    > 
        <StyledChatRoomTitleBox>
            <StyledChatRoomTitle>
                <span>
                    {/* 즐겨찾는 목록 */}
                    {title}(<span className="number">{roomsCount}</span>)
                </span>
                <StyledChatRoomIc/>
            </StyledChatRoomTitle>
        </StyledChatRoomTitleBox>
    </StyledChatRoomBox>
    )
}

const StyledChatRoomBox = styled.div `
    background: #fff;
    border-radius: 5px;
    margin-top: 9px;
    display: ${(props) => props.opened ? 'block' : 'none'}
`

const StyledChatRoomTitleBox = styled.div `
    position: relative;
    border-bottom: 1px solid #d9e4e5;
`

const StyledChatRoomTitle = styled.a `
    display: block;
    height: 48px;
    line-height: 48px;
    padding: 0 50px 0 33px;
    font-size: 14px;
`

const StyledChatRoomIc = styled.i `
    position: absolute;
    top: 21px;
    left: 17px;
    background-position: ${(props) => props.opened ? '-50px -50px' : '-175px -225px'};
    width: 8px;
    height: ${(props) => props.opened ? '4px' : '8px'};
    margin-top: ${(props) => props.opened ? '-2px' : '0'};
`

export default ChatRoomBox;