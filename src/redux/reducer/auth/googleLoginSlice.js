// googleLoginSlice.js
import { createSlice } from "@reduxjs/toolkit";

const googleLoginSlice = createSlice({
  name: "googleLogin",
  initialState: {
    loading: false,
    userData: null,
    error: null,
  },
  reducers: {
    googleLoginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    googleLoginSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = null;
    },
    googleLoginFailure: (state, action) => {
      state.loading = false;
      state.userData = null;
      state.error = action.payload;
    },
  },
});

export const { googleLoginRequest, googleLoginSuccess, googleLoginFailure } =
  googleLoginSlice.actions;

export default googleLoginSlice.reducer;
