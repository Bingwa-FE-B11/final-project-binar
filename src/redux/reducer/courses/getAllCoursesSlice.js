import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: null,
};

const getAllCoursesSlice = createSlice({
  name: "dataCourses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { setCourses } = getAllCoursesSlice.actions;

export default getAllCoursesSlice.reducer;
