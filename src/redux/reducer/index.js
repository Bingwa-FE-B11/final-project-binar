import { combineReducers } from "@reduxjs/toolkit";
// import userProfileSlice from "./auth/userProfileSlice";
import registerSlice from "./auth/registerSlice";
import passwordSlice from "./auth/passwordSlice";
import otpSlice from "./auth/otpSlice";
import loginSlice from "./auth/loginSlice";
import profileSlice from "./akun/profileSlice";
import ChangePassSlice from "./akun/ChangePassSlice";
import getAllCategoriesSlice from "./categories/getAllCategoriesSlice";
import adminLoginSlice from "./admin/auth/adminLoginSlice";
import allDataSlice from "./admin/data/allDataSlice";
import courseSlice from "./courses/courseSlice";

export default combineReducers({
  // User
  authLogin: loginSlice,
  authRegister: registerSlice,
  authPassword: passwordSlice,
  authOtp: otpSlice,
  authProfile: profileSlice,
  changePass: ChangePassSlice,

  // Categories
  dataCategories: getAllCategoriesSlice,

  // Courses
  dataCourses: courseSlice,

  // Admin
  adminAuthLogin: adminLoginSlice,
  allAdminData: allDataSlice,
});
