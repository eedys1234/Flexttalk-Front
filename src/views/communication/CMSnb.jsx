import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CMSnbHeader from './CMSnbHeader';
import ChatRoomBox from '../../components/chatroom/ChatRoomBox';

import { list } from '../../redux/reducers/RoomReducer';

const CMSnb = ({}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(list())
    }, []);

    return (
        <div className ="communication_snb">
            <CMSnbHeader />
            <div className="communication_snb_group">
                <ChatRoomBox />
                <ChatRoomBox />
            </div>
        </div>
    )
};

export default CMSnb;