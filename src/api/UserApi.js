import { post, put } from './RestApi';

export default class UserApi {

    static registerUser = (params) => {
        const url = `/api/v1/user`;
        return post(`${url}`, params)
    }

    static approveGuest = (params) => {
        const url = `/api/v1/user/approve`;
        return put(`${url}`, params);
    }

    static grantAuthorityToUser = (params) => {
        const url = `/api/v1/user/grant-authority`;
        return put(`${url}`, params);
    }

    static lossAuthorityToUser = (params) => {
        const url = `/api/v1/user/loss-authority`;
        return put(`${url}`, params);
    }

    static login = (params) => {
        const url = `/api/v1/user/login`;
        return post(`${url}`, params);
    }
}