import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxPostPaymentMidtrans = async (categoryId) => {
  return await http.post(`${API_ENDPOINT.CREATE_MIDTRANS_PAYMENT}/${categoryId}`);
};