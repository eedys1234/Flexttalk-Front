import { get, post, put, remove } from './RestApi';

export default class MessageApi {

    static sendTextMessage = ({roomId, participantId, ...params}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/message/text`;
        return post(`${url}`, params);
    }

    static sendFileMessage = ({roomId, participantId}, form) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/message/file`;
        return post(`${url}`, form);
    }

    static deleteMessage = ({roomId, participantId, messageId}) => {
        const url = `/api/v1/rooms/${roomId}/participants/${participantId}/message/${messageId}`;
        return remove(`${url}`);
    }

    static unReadMessageCount = ({roomId}) => {
        const url = `/api/v1/rooms/${roomId}/unread-messages`;
        return get(`${url}`);
    }

    static readMessage = (params) => {
        const url = `/api/v1/rooms/messages/read`;
        return put(`${url}`, params);
    }
}