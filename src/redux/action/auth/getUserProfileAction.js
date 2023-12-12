import { reduxGetUser } from "../../../services/user/auth/GetUser";
import { setUser } from "../../reducer/auth/loginSlice";

export const getUserProfileAction = () => (dispatch) => {
  reduxGetUser()
    .then((result) => {
      console.log("reduxGetUser", result);
      dispatch(setUser(result.data.data.user));
      return true;
    })
    .catch((err) => {
      console.error("reduxGetUser", err);
    });
};
