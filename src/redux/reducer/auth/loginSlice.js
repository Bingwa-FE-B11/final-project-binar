import { createSlice } from "@reduxjs/toolkit";
import { CookieStorage, CookiesKeys } from "../../../utils/cookie";

const initialState = {
  token: CookieStorage.get(CookiesKeys.AuthToken) || undefined,
  isLoggedIn: false,
  user: null,
};

const loginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = loginSlice.actions;

export default loginSlice.reducer;
