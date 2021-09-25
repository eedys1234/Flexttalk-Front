
import { useCallback } from "react"
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { selectedRoomType } from "../../../../redux/reducers/RoomReducer";

const HeaderMenuItem = ({roomType, roomTypeName, alarmCount = 0, selected}) => {

    const dispatch = useDispatch();

    const onClickMenu = useCallback(() => {
        dispatch(selectedRoomType(roomType))
    }, [roomType]);

    return (
        <StyledHeaderLi 
            selected={selected}
            onClick={onClickMenu}
        >
            <StyledHeaderChatMenu>
                <div>
                    <span>
                        {roomTypeName}
                    </span>
                </div>
                <StyledChatBadge
                    show={alarmCount > 0}
                >
                    {alarmCount}
                </StyledChatBadge>
            </StyledHeaderChatMenu>
        </StyledHeaderLi>
    )
}

const StyledHeaderLi = styled.li `
    position: relative;
    float: left;
    &::after {
        display: block;
        content: '';
        width:1px;
        background: rgba(0, 0, 0, 0.2);        
    }
    &:hover: {
        background-color: #212529,
    }
    cursor: pointer;
    ${({selected}) => selected ? `background-color: #212529;` : `` }    
`

const StyledHeaderChatMenu = styled.a`
    position: relative;
    display: block;
    width: 45px;
    height: 45px;
    padding: 0 10px;
    color: #fff;
    font-weight: 400;
    line-height: 48px;
    &::hover {
        font-weight: 600;
    }
    ${(props) => props.selected ? `
        border-bottom: 3px solid #fff;
        font-weight: 600;    
    `: ``}
`

const StyledChatBadge = styled.span `
    position: absolute;
    top: 2px;
    right: 0;
    max-width: 27px;
    padding: 2px 4px 2px 3px;
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    text-align: center;
    vertical-align: top;
    min-width: 16px;
    border-radius: 10px;
    line-height: 12px; 
    background: #fc5356;
    ${(props) => props.show ? `inline-block` : `display: none`}

`

export default HeaderMenuItem;