
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
    right: 27px;
    width: 27px;
    height: 27px;
    border: 0;
    background: 0 0;
    cursor: pointer;
    outline: 0;
`

const StyledICSearch = styled.span `
    display: inline-block;
    background: url(../../static/sp_ic.png) 0 0 no-repeat;
    overflow: hidden;
    line-height: 100em;
    vertical-align: top;
    width: 16px;
    height: 14px;
    background-position: -100px 0;
`

export default SearchBtn;