import { combineReducers } from "@reduxjs/toolkit";
import Password from "./auth/Password";
import Login from "./auth/Login";
import Register from "./auth/authRegister";
import Otp from "./auth/Otp";

export default combineReducers({
    authLogin : Login,
    authRegister : Register,
    authPassword : Password,
    authOtp : Otp,
})