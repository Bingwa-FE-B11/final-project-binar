import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http2 from "../../../utils/http2";

export const reduxForgetPass = async (email) => {
  return await http2.post(API_ENDPOINT.FORGET_PASS, email);
};