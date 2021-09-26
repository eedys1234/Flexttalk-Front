import SearchBtn from './SearchBtn';
import CacnelBtn from './CancelBtn';
import styled from 'styled-components';

const SearchBox = ({keyword, onClickCancel, onClickSearch, onKeyUpSearch, onChangeKeyword}) => {

    return (
            <StyledSearchBox>
                <StyledSearchField> 
                    <div className="basic_text">
                        <StyledInpbx>
                            <StyledInput
                                name="keyword"
                                value={keyword}
                                onChange={onChangeKeyword}
                            /> 
                            <SearchBtn 
                                onClick={onClickSearch}
                                onKeyUp={onKeyUpSearch}
                            />
                            <CacnelBtn 
                                onClick={onClickCancel}
                            />                    
                        </StyledInpbx>
                    </div>
                </StyledSearchField>
            </StyledSearchBox>

    )
};

const StyledSearchBox = styled.div `
    width: 240px;
    height: 48px;
    padding: 10px 0;
    box-sizing: border-box;
`

const StyledSearchField = styled.div `
    position: relative;
`

const StyledInpbx = styled.div `
    position: relative;
    height: 19px;
    padding: 6px 6px 0;
    padding-right: 52px;
    border: 1px solid #dbdbdb;
    background: #fff;
    line-height: 19px;
`

const StyledInput = styled.input `
    display: block;
    width: 100%;
    border: 0;
    background: 0 0;
    font-size: 12px;
    font-family: 돋움,Dotum,Helvetica,Apple SD Gothic Neo,sans-serif!important;
    color: #1a1a1a;
    letter-spacing: 0;
    vertical-align: top;
    outline: 0;
`
export default SearchBox;