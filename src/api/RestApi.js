import axios from 'axios';
import { getToken } from '../utils/Token.js';
import { SUCCESS } from './HttpStatus.js';
import ApiError from './ApiError.js';
import { _ } from '../utils/Fx.js';

const instance = axios.create({
    baseURL: process.env.domainUrl,
    timeout: 30000,
    withCredentials: true,
});

const isComplete = status => {
    return SUCCESS.indexOf(status) > -1;
}

const createApiError = (status, data) => {
    return new ApiError(status, data, `Api 호출 실패 : ${status}`);
}

const returnResult = (status, data, resolve, reject) => {
    isComplete(status) ? resolve(data) : reject(createApiError(status, data));
}

const addTokenDecorator = (url, params) => {
    instance.defaults.headers.common = getToken();
    return { url, params };
}

const addUserIdDecorator = (url, params) => {
    if(params.hasOwnProperty('userId')) instance.defaults.headers.common.userId = params.userId;
    return { url, params };
}

export const get = _.pipe(
    addTokenDecorator,
    addUserIdDecorator,
    ({url}) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then(({ data, status }) => returnResult(status, data, resolve, reject));
        }) 
    }
)

export const post = _.pipe(
    addTokenDecorator,
    addUserIdDecorator,
    ({url, param}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, param)
        .then(({ data, status }) => returnResult(status, data, resolve, reject));
    });
});

export const put = _.pipe(
    addTokenDecorator,
    addUserIdDecorator,
    ({url, param}) => {
    return new Promise((resolve, reject) => {
        axios.put(url, param)
        .then(({ data, status }) => returnResult(status, data, resolve, reject));
    });
});

export const remove = _.pipe(
    addTokenDecorator,
    addUserIdDecorator,
    ({url}) => {
    return new Promise((resolve, reject) => {
        axios.delete(url)
        .then(({ data, status }) => returnResult(status, data, resolve, reject));
    });
});

