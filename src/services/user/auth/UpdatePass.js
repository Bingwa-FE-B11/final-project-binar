// services/user/auth/UpdatePass.js
import http2 from "../../../utils/http2";
import { API_ENDPOINT } from "../../../utils/api-endpoint";

export const reduxUpdatePass = async (token) => {
  return await http2.put(`${API_ENDPOINT.UPDATE_PASS}?token=${token ? token : ""}`);
}
// export const reduxUpdatePass = async (token, data) => {
//   try {
//     // Menggunakan header untuk menyertakan token
//     const response = await http2.put(API_ENDPOINT.UPDATE_PASS, data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };