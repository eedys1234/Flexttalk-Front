import axios from 'axios';
import { getToken } from '../utils/token';

const instance = axios.create({
    baseURL: api.url,
    timeout: 30000,
    withCredentials: true,
});

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

