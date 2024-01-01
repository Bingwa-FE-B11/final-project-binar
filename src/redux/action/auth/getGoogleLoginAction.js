import { reduxGoogleLoginUser } from "../../../services/user/auth/LoginUser";

export const getGoogleLoginAction = () => async (dispatch) => {
  // try {
  //   const response = await reduxGoogleLoginUser();
  //   const data = await response.json();
  //   console.log(
  //     "🚀 ~ file: getGoogleLoginAction.js:10 ~ getGoogleLoginAction ~ data:",
  //     data,
  //   );
  //   // navigate(data.url);
  //   console.log(
  //     "🚀 ~ file: getGoogleLoginAction.js:14 ~ getGoogleLoginAction ~ response:",
  //     response,
  //   );
  //   // return true;
  // } catch (error) {
  //   console.error(
  //     "🚀 ~ file: getGoogleLoginAction.js:21 ~ getGoogleLoginAction ~ error:",
  //     error,
  //   );
  // }
  return reduxGoogleLoginUser()
    .then((result) => {
      console.log(
        "🚀 ~ file: getGoogleLoginAction.js:25 ~ .then ~ result:",
        result,
      );
      return true;
    })
    .catch((e) => {
      console.error(e);
    });
};
