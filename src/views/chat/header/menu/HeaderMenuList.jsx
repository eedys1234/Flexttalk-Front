
import HeaderMenuItem from './HeaderMenuItem'

import styled from "styled-components";

const HeaderMenuList = ({menuList}) => {
    
    return (
        <StyledHeaderUl>
            {
                menuList.map((menuItem)=> {
                    return <HeaderMenuItem
                        key={menuItem.roomType}
                        roomType={menuItem.roomType}
                        roomTypeName={menuItem.roomTypeName}
                        alarmCount={menuItem.alarmCount}
                        selected={menuItem.selected}
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