import { get, post, put, remove } from './RestApi';

export default class ParticipantApi {

    //채팅방 참여자 리스트 가져오기
    static getParticipants = ({roomId}) => {
        const url = `/api/v1/rooms/${roomId}/participants`;
        return get(`${url}`);
    }
    
    //채팅방 초대하기
    static inviteParticipants = ({roomId, ...params}) => {
        const url = `/api/v1/rooms/${roomId}/participants`;
        return post(`${url}`, params);
    }
    
    //채팅방 떠나기
    static leaveParticipant = ({roomId, participantId}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}`;
        return remove(`${url}`);
    }
    
    //채팅방 추방하기
    static deportParticipant = ({roomId, ownerParticipantId, ...params}) => {
        const url = `/api/v1/rooms/${roomId}/participants/owner-participant/${ownerParticipantId}`;
        return put(`${url}`, params)
    }
    
    //채팅방 권한 전달하기
    static promotePermission = ({roomId, ownerParticipantId, ...params}) => {
        const url = `/api/v1/rooms/${roomId}/participants/owner-participant/${ownerParticipantId}`;
        return put(`${url}`, params);
    }
    
    //채팅방 즐겨찾기 등록
    static addBookMarkToRoom = ({roomId, participantId}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/bookmark`;
        return post(`${url}`, {});
    }
    
    //채팅방 즐겨찾기 삭제
    static deleteBookMarkToRoom = ({roomId, participantId}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/bookmark`;
        return remove(`${url}`, {});
    }
    
    //채팅방 알람 등록
    static addAlarmToRoom = ({roomId, participantId}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/alarm`;
        return post(`${url}`, {});
    }
    
    //채팅방 알람 삭제
    static deleteAlarmToRoom = ({ selectedRoom : { roomId } , participantId }) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/alarm`;
        console.log(url);
        return remove(`${url}`, {});
    }
};

