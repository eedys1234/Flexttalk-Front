import HeaderContenEtcList from "./HeaderContentEtcList";

import styled from "styled-components";

const HeaderContent = ({selectedRoomName, roomEtcFeatureList}) => {
    return (
        <StyledHeaderWrapper>
            <StyledChatTitle>
                <StyledChatTitleText>{selectedRoomName}</StyledChatTitleText>
            </StyledChatTitle>
            <StyledChatETC>
                <HeaderContenEtcList 
                     roomEtcFeatureList={roomEtcFeatureList}
                ></HeaderContenEtcList>
            </StyledChatETC>
        </StyledHeaderWrapper>
    );
}

const StyledHeaderWrapper = styled.div `
    position: relative;
    overflow: hidden;
    padding: 0 20px;
    background: transparent;
    height: 48px;
    border: 0;
    z-index: 1;
`

const StyledChatTitle = styled.h2 `
    padding-right: 410px;
    overflow: hidden;
    color: #fff;
    font-size: 18px;
    line-height: 48px;
    background: #343a40;
`

const StyledChatTitleText = styled.span `
    display: inline-block;
    padding-left: 12px;
    font-weight: 400;
`

const StyledChatETC = styled.div `
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -13px;
`



export default HeaderContent; 