
import styled from "styled-components"

const HeaderMenuItem = ({roomType, badgeCount = 0}) => {
    return (
        <StyledHeaderLi>
            <StyledHeaderChatMenu>
                <div>
                    <span>
                        {roomType}
                    </span>
                </div>
                <StyledChatBadge
                    show={badgeCount > 0}
                >
                    {badgeCount}
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
    cursor: pointer;
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