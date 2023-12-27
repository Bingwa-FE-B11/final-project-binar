import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: [],
<<<<<<< HEAD
  enrollments: null,
=======
  enrollments: [],
>>>>>>> 92726baaaee76f75cd6417339035f55030755fc1
};

const postEnrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    setCourseEnroll: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { setEnrollments, setCourseEnroll } = postEnrollmentSlice.actions;

export default postEnrollmentSlice.reducer;
