
import styled from 'styled-components';

const CancelBtn = ({onClick}) => (
    <StyledCancelBtn 
        onClick={onClick}
    >
        <StyledIcCancel />
    </StyledCancelBtn>
);

const StyledCancelBtn = styled.button `
    display: none;
`

const StyledIcCancel = styled.span `
    width: 12px;
    height: 12px;
    background-position: -49px -178px;
`

export default CancelBtn;