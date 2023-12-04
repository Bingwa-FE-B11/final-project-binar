import { combineReducers } from "@reduxjs/toolkit";
import authLoginSlice from "./authLoginSlice";


export default combineReducers({
    authLogin: authLoginSlice
})