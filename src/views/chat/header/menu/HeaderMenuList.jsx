
import HeaderMenuItem from './HeaderMenuItem'

import styled from "styled-components";

const HeaderMenuList = ({menuList}) => {
    return (
        <StyledHeaderUl>
            {
                menuList.map((menuItem)=> {
                    return <HeaderMenuItem
                        roomType={menuItem.roomType}
                        badgeCount={menuItem.badgeCount}
                    >                        
                    </HeaderMenuItem>
                })
            }
        </StyledHeaderUl>
    )
}

const StyledHeaderUl = styled.ul `
    display: inline-block;
`

export default HeaderMenuList;