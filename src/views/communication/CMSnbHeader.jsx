import styled from 'styled-components';
import SearchBox from '../../components/cmmn/SearchBox';

const CMSnbHeader = () => (
    <StyledCMSnbHeader>
        <SearchBox />
    </StyledCMSnbHeader>
);

const StyledCMSnbHeader = styled.div `
    display: block;
    height: 48px;
    padding: 0 20px 0;
    line-height: 48px;
    background: #fff;
    border-radius: 5px;
`

export default CMSnbHeader;