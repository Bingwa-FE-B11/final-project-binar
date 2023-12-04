import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http2 from "../../../utils/http2";

export const reduxForgetPass = async (email) => {
  const requestBody = { email };

  try {
    const response = await http2.post(API_ENDPOINT.FORGET_PASS, requestBody);
    return response;
  } catch (error) {
    console.error("Permintaan lupa kata sandi gagal", error);
    throw error;
  }
};