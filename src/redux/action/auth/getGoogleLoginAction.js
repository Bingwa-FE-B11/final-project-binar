// actions.js
import { reduxGoogleLoginUser } from "../../../services/user/auth/LoginUser";

export const getGoogleLoginAction = () => async (dispatch) => {
  try {
    const response = await reduxGoogleLoginUser();
    console.log(
      "🚀 ~ file: getGoogleLoginAction.js:14 ~ getGoogleLoginAction ~ response:",
      response,
    );
    return true;
  } catch (error) {
    console.error(
      "🚀 ~ file: getGoogleLoginAction.js:21 ~ getGoogleLoginAction ~ error:",
      error,
    );
  }
};
