import styled from "styled-components";
import RnbInSubmitBx from "./RnbInSubmitBx";
import RnbInContentBx from "./RnbInContentBx";

const RnbIn = ({list, onChange}) => {

    return (
        <StyledRnbIn>
            <RnbInSubmitBx 
                onChange={onChange}
            />
            <RnbInContentBx
                list={list} 
            />	
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

export default RnbIn;