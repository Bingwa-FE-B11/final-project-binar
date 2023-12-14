import { combineReducers } from "@reduxjs/toolkit";
// import userProfileSlice from "./auth/userProfileSlice";
import registerSlice from "./auth/registerSlice";
import passwordSlice from "./auth/passwordSlice";
import otpSlice from "./auth/otpSlice";
import loginSlice from "./auth/loginSlice";
import profileSlice from "./akun/profileSlice";

export default combineReducers({
  authLogin: loginSlice,
  authRegister: registerSlice,
  authPassword: passwordSlice,
  authOtp: otpSlice,
  authProfile: profileSlice,
//   authGetUserProfile: userProfileSlice,
});
