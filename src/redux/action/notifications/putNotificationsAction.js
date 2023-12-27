import { reduxPutNotif } from "../../../services/notifications/PutNotification";
import { setStatus } from "../../reducer/notifications/getNotificationsSlice";

export const putNotificationsAction = () => (dispatch) => {
  reduxPutNotif()
    .then((result) => {
      console.log("putStatusAction:", result);
      dispatch(setStatus(result.data.data.notifications));
      return result;
    })
    .catch((err) => {
      console.error("reduxPutStatus", err);
    });
};
