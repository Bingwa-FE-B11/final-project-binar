import { reduxPostPayment } from "../../../services/payment/CreatePayment";
import { setPayment } from "../../reducer/payment/PaymentSlice";

export const postPaymentAction = (input, courseId) => async (dispatch) => {
  console.log("postPaymentAction -> input", input)
  console.log("postPaymentAction -> courseId", courseId)
  
  try {
    const result = await reduxPostPayment(input, courseId);
    console.log("postPayment", result);
    dispatch(setPayment(result.data.data.newPayment));
    return true; 
  } catch (err) {
    console.log('error postPaymentAction', err);
    return false;
  }
};