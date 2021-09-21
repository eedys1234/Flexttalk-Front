import { AuthHeader, AuthType } from "../constants/AuthConstants"
import cookie from "react-cookies";

export const getToken = (tokenName = 'token') => {
    const token = cookie.load(tokenName);
    return token ? { AuthHeader: `${AuthType} ${token}`} : {};
}