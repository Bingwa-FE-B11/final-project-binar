import { combineReducers } from "@reduxjs/toolkit";
import Password from "./auth/Password";

export default combineReducers({
    auth : Password
})