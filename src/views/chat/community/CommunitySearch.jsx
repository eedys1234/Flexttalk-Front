import SearchBox from '../../../components/search/SearchBox';

import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRoom } from '../../../redux/reducers/RoomReducer';

const CommunitySearch = () => {

    const { keyword } = useSelector(state => state.rooms);
    const dispatch = useDispatch();

    const onChangeKeyword = useCallback((e) => {
        const { value } = e.target;        
        dispatch(searchRoom(value));
    }, [dispatch]);

    return(
            <StyledCommunitySearch>
                <SearchBox 
                    keyword={keyword}
                    onChangeKeyword={onChangeKeyword}
                />
            </StyledCommunitySearch>
    )
};

const StyledCommunitySearch = styled.div `
    display: block;
    height: 48px;
    padding: 0 20px 0;
    line-height: 48px;
    background: #fff;
    border-radius: 5px;
    margin-top: 9px;
`

export default CommunitySearch;