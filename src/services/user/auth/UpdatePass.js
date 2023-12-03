// services/user/auth/UpdatePass.js
import http2 from "../../../utils/http2";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

export const reduxUpdatePass = async (token, data) => {
  try {
    // Include token in the request
    const response = await http2.put(`${API_ENDPOINT.UPDATE_PASS}?token=${token}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
