
import HeaderMenuList from "./HeaderMenuList";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HeaderMenu = () => {

    const { types } = useSelector(state => state.rooms);

    return (
        <StyledHeaderMenu>
            <HeaderMenuList
                menuList={types}
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