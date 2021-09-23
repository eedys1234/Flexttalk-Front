
import styled from "styled-components";
import HeaderMenuList from "./HeaderMenuList";

const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <HeaderMenuList
                menuList={[
                    {
                        roomType: `1:1`,
                        badgeCount: 10,
                    },
                    {
                        roomType: `그룹`,
                        badgeCount: 0,
                    },
                    {
                        roomType: `오픈`,
                        badgeCount: 0,
                    }
                ]}
            >

            </HeaderMenuList>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.div `
    float: left;
    width: 300px;
    clear: both;
    overflow: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    text-align: center;
    padding-right: 20px;
`



export default HeaderMenu; 