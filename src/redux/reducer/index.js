import { combineReducers } from "@reduxjs/toolkit";
import Password from "./auth/Password";
import Login from "./auth/Login";

export default combineReducers({
    auth : Login,
    auth : Password
})