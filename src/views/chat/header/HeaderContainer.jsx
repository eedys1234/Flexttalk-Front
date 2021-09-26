import HeaderMenu from "./menu/HeaderMenu";
import HeaderContent from './feature/HeaderContent';
import styled from "styled-components";

import { types } from '../../../redux/reducers/RoomReducer' 
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { roomEtcFeatureList } from '../../../utils/RoomUtil';

const HeaderContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(types())
    }, [dispatch]);


    return (
        <StyledHeader>
            <HeaderMenu />
            <HeaderContent 
                roomEtcFeatureList={roomEtcFeatureList}
            />
        </StyledHeader>
    )
}

const StyledHeader = styled.div `
    height: 48px;
    padding: 0 20px;
    background: #343a40;
`

export default HeaderContainer;