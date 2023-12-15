import { showErrorToast } from "../../../helper/ToastHelper";
import { reduxGetUser } from "../../../services/user/auth/GetUser";
import { reduxUpdateProfile } from "../../../services/user/auth/UpdateProfile";
import { setUser } from "../../reducer/auth/loginSlice";
import { setCity, setCountry } from "../../reducer/akun/profileSlice";

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

export const PutUpdateProfile = (input, token) => async (dispatch) => {
  reduxUpdateProfile(input, token)
    .then((result) => {
      console.log("result -> reduxUpdateProfile", result);
      // dispatch((result.data.data));
      return result;
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          showErrorToast(err.response.data.message);
        } else {
          console.error("unexpected Error", err);
        }
      }
    });
};