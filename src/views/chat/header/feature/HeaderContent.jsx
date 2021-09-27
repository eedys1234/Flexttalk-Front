import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { roomEtcFeatureList } from '../../../../utils/RoomUtil';
import HeaderContenEtcList from "./HeaderContentEtcList";
import styled from "styled-components";
import { deportParticipantPopupOpen, displayFilesPopupOpen, inviteParticipantPopupOpen, participantsPopupOpen } from "../../../../redux/reducers/CmmnReducer";

const HeaderContent = () => {

    const { selectedRoom } = useSelector(state => state.rooms);
    const { roomName } = selectedRoom || { roomName: ''};

    const dispatch = useDispatch();
    
    const onClickParticipants = useCallback((e, selectedRoom) => {
        dispatch(participantsPopupOpen(selectedRoom));
    }, [dispatch]);

    const onClickInvite = useCallback((e) => {
        dispatch(inviteParticipantPopupOpen());
    }, [dispatch]);

    const onClickDeport = useCallback((e, selectedRoom) => {
        dispatch(deportParticipantPopupOpen(selectedRoom))
    }, [dispatch]);

    const onClickDisplayFiles = useCallback((e, selectedRoom) => {
        dispatch(displayFilesPopupOpen(selectedRoom));
    }, [dispatch]);

    const onClickSearchMessage = useCallback((e) => {
        console.log('tag', 'onClickSearchMessage()');
    }, []);

    roomEtcFeatureList[0].onClickItem = roomEtcFeatureList[0].onClickItem || onClickParticipants;
    roomEtcFeatureList[1].onClickItem = roomEtcFeatureList[1].onClickItem || onClickInvite;
    roomEtcFeatureList[2].onClickItem = roomEtcFeatureList[2].onClickItem || onClickDeport;
    roomEtcFeatureList[3].onClickItem = roomEtcFeatureList[3].onClickItem || onClickDisplayFiles;
    roomEtcFeatureList[4].onClickItem = roomEtcFeatureList[4].onClickItem || onClickSearchMessage;

    return (
        <StyledHeaderWrapper>
            <StyledChatTitle>
                <StyledChatTitleText>{roomName}</StyledChatTitleText>
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