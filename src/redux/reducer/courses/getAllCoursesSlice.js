import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: null,
  detail: [],
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
  },
});

export const { setCourses, setDetail } = getAllCoursesSlice.actions;

export default getAllCoursesSlice.reducer;
