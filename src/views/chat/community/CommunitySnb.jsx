import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CommunityHeader from './CommunityHeader';
import DropDownBox from '../../../components/dropdown/DropDownBox';

import { list } from '../../../redux/reducers/RoomReducer';
import styled from 'styled-components';

const CMSnb = ({}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(list())
    }, []);

    return (
        <StyledSnb>
            <CommunityHeader />
            <div className="communication_snb_group">
                <DropDownBox />
                <DropDownBox />
            </div>
        </StyledSnb>
    )
};

const StyledSnb = styled.div `
    position: absolute;
    top: 48px;
    bottom: 0;
    left: 0;
    width: 320px;
    padding: 20px;
    box-sizing: border-box;
    background: #ededed;
    overflow: hidden;
    overflow-y: auto;
`

export default CMSnb;