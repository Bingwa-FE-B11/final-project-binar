import { reduxLoginUser } from "../../services/user/auth/LoginUser";
import { CookieStorage, CookiesKeys } from "../../utils/cookie";
import { setToken } from "../reducer/authLoginSlice";


export const LoginUser = (input) => (dispatch) => { 
    return reduxLoginUser(input).then((result) => {
    CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token)
    dispatch(setToken(result.data.data.token));
    return true;
}).catch((err) => {
    console.error("error:", err);
});
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookiesKeys.AuthToken)
}