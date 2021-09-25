import CommunitySnb from "./community/CommunitySnb";
import RoomContainer from "./room/RoomContainer";
import HeaderContainer from "./header/HeaderContainer";

import styled from "styled-components";

const ChatMain = () => {

    return (
        <div className="flextalk snbnext">
            <StyledContainer>
                <StyledContainerin>
                    <StyledContent>
                        <HeaderContainer />
                        <CommunitySnb />
                        <RoomContainer />
                    </StyledContent>
                </StyledContainerin>
            </StyledContainer>
        </div>
    );
}

const StyledContainer = styled.div `
    &::after {
        display: block;
        clear: both;
        content: '';    
    }
`

const StyledContainerin = styled.div `
    &::after {
        display: block;
        clear: both;
        content: '';        
    }
`

const StyledContent = styled.div `
    &::after {
        display: block;
        clear: both;
        content: '';        
    }
`


export default ChatMain;