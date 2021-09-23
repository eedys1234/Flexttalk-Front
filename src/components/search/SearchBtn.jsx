
import styled from 'styled-components';

const SearchBtn = ({onClick, onKeyUp}) => (
    <StyledSearchBtn 
        onClick={onClick} 
        onKeyUp={onKeyUp}
    >
        <StyledICSearch />
    </StyledSearchBtn>
);


const StyledSearchBtn = styled.button `
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

const StyledICSearch = styled.span `
    width: 16px;
    height: 14px;
    background-position: -100px 0;
`

export default SearchBtn;