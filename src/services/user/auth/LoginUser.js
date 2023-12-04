// Service Login User
import { useMutation } from "@tanstack/react-query";
import http from "../../../utils/http";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

// khusus Redux
export const reduxLoginUser = async (input) => {
  return await http.post(API_ENDPOINT.USER_LOGIN , input )
}


// use Mutation Function 

const LoginUser = async (input) => {
  return await http.post(API_ENDPOINT.USER_LOGIN , input ).then((result) => {
    CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token)
    return result
  }).catch((err) => {
    
  });;
}

const useLoginUser = () => {
    return useMutation(LoginUser)
  };
  export { LoginUser , useLoginUser }

