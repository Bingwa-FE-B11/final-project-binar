import { API_ENDPOINT } from "../../../utils/api-endpoint";
import http2 from "../../../utils/http2";

export const reduxOtpUser = async (input) =>{
    return await http2.put(API_ENDPOINT.VERIFY_OTP, input);
}

export const reduxResendOtpUser = async (input) =>{
    return await http2.put(API_ENDPOINT.RESEND_OTP, input);
}