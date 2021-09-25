import cookie from "react-cookies";

export const getToken = (tokenName = 'token') => {
    const token = cookie.load(tokenName);
    return token ? { "Authorization": `Bearer ${token}`} : { "Authorization" : `Bearer `};
}