
import styled from 'styled-components';

const CancelBtn = ({onClick}) => (
    <StyledCancelBtn 
        onClick={onClick}
    >
        <StyledIcCancel />
    </StyledCancelBtn>
);

const StyledCancelBtn = styled.button `
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 27px;
    height: 27px;
    border: 0;
    background: 0 0;
    cursor: pointer;
    outline: 0;
`

const StyledIcCancel = styled.span `
    width: 12px;
    height: 12px;
    background-position: -49px -178px;
`

export default CancelBtn;