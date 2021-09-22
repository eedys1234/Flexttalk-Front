import axios from 'axios';
import { getToken } from '../utils/Token.js';
import ApiError from './ApiError.js';
import { SUCCESS } from './HttpStatus.js';

const instance = axios.create({
    baseURL: JSON.stringify("http://localhost:9000"),
    timeout: 30000,
    withCredentials: true,
});

const isComplete = status => {
    return SUCCESS.indexOf(status) > -1;
}

const createApiError = (status, data) => {
    return new ApiError(status, data, `Api 호출 실패 : ${status}`);
}

export const get = url => {
    return new Promise((resolve, reject) => {
        instance.defaults.headers.common = getToken();
        axios.get(url)
        .then(({ data, status }) => isComplete(status) ? resolve(data) : reject(createApiError(status, data)))
    }) 
}

export const post = (url, param) => {
    return new Promise((resolve, reject) => {
        instance.defaults.headers.common = getToken();
        axios.post(url, param)
        .then(({ data, status }) => isComplete(status) ? resolve(data) : reject(createApiError(status, data)))
    });
}

export const put = (url, param) => {
    return new Promise((resolve, reject) => {
        instance.defaults.headers.common = getToken();
        axios.put(url, param)
        .then(({ data, status }) => isComplete(status) ? resolve(data) : reject(createApiError(status, data)))
    });
}

export const remove = url => {
    return new Promise((resolve, reject) => {
        instance.defaults.headers.common = getToken();
        axios.delete(url)
        .then(({ data, status }) => isComplete(status) ? resolve(data) : reject(createApiError(status, data)))    
    });
}

