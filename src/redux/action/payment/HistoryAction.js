import { reduxGetHistoryPayment } from "../../../services/payment/HistoryPayment";
import { setHistory } from "../../reducer/payment/PaymentSlice";

export const getHistoryAction = () => (dispatch) => {
    reduxGetHistoryPayment()
    .then((result) => {
      console.log("getHistoryPaymentAction:", result);
      dispatch(setHistory(result.data.data.payments));
      return true;
    })
    .catch((err) => {
      console.error("reduxGetHistory", err);
    });
};