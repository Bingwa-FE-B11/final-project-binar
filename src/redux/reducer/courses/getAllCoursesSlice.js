import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: null,
  detail: [],
  me: [],
};

const getAllCoursesSlice = createSlice({
  name: "dataCourses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
    setMe: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { setCourses, setDetail, setMe } = getAllCoursesSlice.actions;

export default getAllCoursesSlice.reducer;
