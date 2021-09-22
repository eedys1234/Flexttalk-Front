import axios from 'axios';
import { getToken } from '../utils/token';

const instance = axios.create({
    baseURL: domainUrl,
    timeout: 30000,
    withCredentials: true,
});

const OK = 200;
const CREATED = 201;
const NO_CONTENT = 204;
const NOT_MODIFIED = 304;

const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBBIDEN = 403;
const NOT_FOUND = 404;
const METHOD_NOT_ALLOWED = 405;
const CONFLICT = 409;

const INTERNAL_SERVER_ERROR = 500;
const BAD_GATEWAY = 502;
const GATEWAY_TIMEOUT = 504;

export const SUCCESS = [OK, CREATED, NO_CONTENT, NOT_MODIFIED];
export const FAILURE = [BAD_REQUEST, UNAUTHORIZED, FORBBIDEN, NOT_FOUND, METHOD_NOT_ALLOWED, CONFLICT, INTERNAL_SERVER_ERROR,
BAD_GATEWAY, GATEWAY_TIMEOUT]; 

export const get = url => {
    instance.defaults.headers.common = getToken();
    return axios.get(url);
}

export const post = (url, param) => {
    instance.defaults.headers.common = getToken();
    return axios.post(url, param);
}

export const put = (url, param) => {
    instance.defaults.headers.common = getToken();
    return axios.put(url, param);
}

export const remove = url => {
    instance.defaults.headers.common = getToken();
    return axios.delete(url);
}

