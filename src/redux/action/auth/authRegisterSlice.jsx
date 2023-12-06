import { CookiesKeys, CookieStorage } from "../../../utils/cookie";
import { setToken } from "../../reducer/auth/Login";
import { reduxRegisterUser } from "../../../services/user/auth/RegisterUser";

export const RegisterUser = (input) => async (dispatch) => {
    return reduxRegisterUser(input).then((result)=>{
      CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token))
      return true
      }).catch((err)=>{
      })
  }
  