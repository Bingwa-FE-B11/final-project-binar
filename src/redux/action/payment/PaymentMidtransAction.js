import { reduxPostPaymentMidtrans } from "../../../services/payment/CreatePaymentMidtrans";
import { setPaymentMidtrans } from "../../reducer/payment/PaymentSlice";

export const postPaymentMidtransAction = (categoryId) => async (dispatch) => {
  await reduxPostPaymentMidtrans(categoryId)
    .then((result) => {
      console.log("postPayment", result);
      dispatch(setPaymentMidtrans(result.data.data.payments));
      return result;
    })
    .catch((err) => {
      console.error("reduxPayment", err);
    });
};