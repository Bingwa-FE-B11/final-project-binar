// services/user/auth/UpdatePass.js
import http2 from "../../../utils/http2";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

export const reduxUpdatePass = async (input, token) => {
  return await http2.put(`${API_ENDPOINT.UPDATE_PASS}?token=${token ? token : ""}`, input);
}
