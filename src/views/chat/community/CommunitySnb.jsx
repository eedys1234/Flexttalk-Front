
import CommunitySearch from './CommunitySearch';
import CommunityGroup from './CommunityGroup';

import useRoom from '../../../hooks/useRoom';

import styled from 'styled-components';
import CommunityBtnBox from './CommunityBtnBox';

const CommunitySnb = ({userId = 0}) => {
    const roomType = 'NORMAR';

    useRoom(userId, roomType)

    return (
        <StyledCommunitySnb>
            <CommunityBtnBox />
            <CommunitySearch />
            <CommunityGroup />
        </StyledCommunitySnb>
    )
};

const StyledCommunitySnb = styled.div `
    position: absolute;
    top: 48px;
    bottom: 0;
    left: 0;
    width: 320px;
    padding: 20px;
    box-sizing: border-box;
    background: #ededed;
    overflow: hidden;
    overflow-y: auto;
`

export default CommunitySnb;