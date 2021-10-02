import styled from "styled-components";
import ParticipantsDlgSubmitBx from "./ParticipantsDlgSubmitBx";
import ParticipantsDlgContentBx from "./ParticipantsDlgContentBx";

const ParticipantsDlgIn = () => {

    return (
        <StyledRnbIn>
            <ParticipantsDlgSubmitBx />
            <ParticipantsDlgContentBx />	
    </StyledRnbIn>
    )
}

const StyledRnbIn = styled.div `
    overflow: auto;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    bottom: 57px;
    padding: 0 26px 20px;
    word-break: break-all;
`

export default ParticipantsDlgIn;