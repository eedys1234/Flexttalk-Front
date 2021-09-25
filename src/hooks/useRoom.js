import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { list } from '../redux/reducers/RoomReducer';

const useRoom = (userId, roomType) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(list())
    }, [userId, roomType]);
}


export default useRoom;