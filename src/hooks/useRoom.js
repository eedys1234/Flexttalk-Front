import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { rooms } from '../redux/reducers/RoomReducer';

const useRoom = (userId, roomType) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(rooms())
    }, [dispatch, userId, roomType]);
}


export default useRoom;