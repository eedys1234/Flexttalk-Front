
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
`

const StyledICSearch = styled.span `
    width: 16px;
    height: 14px;
    background-position: -100px 0;
`

export default SearchBtn;