import { createSlice } from "@reduxjs/toolkit";
import { CookiesKeys, CookieStorage } from "../../../utils/cookie";

const initialState = {
    token : CookieStorage.get(CookiesKeys.AuthToken) || undefined,
    isRegister : "",
    user : null,
}

const authRegister = createSlice({
    name : "RegisterAuth",
    initialState ,
    reducers :{
        setToken: (state, action) => {
            state.token = action.payload;
          },
        setIsLoggedIn: (state, action) => {
            state.isRegister = action.payload;
          },
        setUser: (state, action) => {
            state.user = action.payload;
          },
    }
})

export const { setToken, setIsLoggedIn, setUser } = authRegister.actions;

export default authRegister.reducer;