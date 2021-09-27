import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { create } from "../../../redux/reducers/RoomReducer";

const CommunityBtnBox = () => {

    const dispatch = useDispatch();

    return (
        <StyledCommunityBtnBox>
            <StyledCommunityBtn
            >
                <StyledCommunitySpan>채팅방 생성</StyledCommunitySpan>
            </StyledCommunityBtn>
        </StyledCommunityBtnBox>
    );
}

const StyledCommunityBtnBox = styled.div `
    height: 42px;
    line-height: 42px;	
`

const StyledCommunityBtn = styled.button `
    display: inline-block;
    width: 100%;
    height: 42px;
    outline: 0;
    border: 0;
    background: #343a40;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
`

const StyledCommunitySpan = styled.span `
    color: #fff;
`

export default CommunityBtnBox;
