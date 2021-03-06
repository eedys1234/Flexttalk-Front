import { get, post, remove } from './RestApi';

export default class RoomApi {

    //채팅방 생성
    static createRoom = (params) => {
        const url = `/api/v1/rooms`; 
        return post(`${url}`, params); 
    }

    //채팅방 삭제
    static removeRoom = ({roomId}) => {
        const url = `/api/v1/rooms/${roomId}`;
        return remove(`${url}`);
    }

    //채팅방 리스트 가져오기
    static rooms = () => {
        const url = `/api/v1/rooms`;
        return get(`${url}`, { user_id: 1});
    }

    //채팅방 Type 정보 가져오기
    static types = () => {
        const url = `/api/v1/rooms/types`;
        return get(`${url}`)
    }

};
