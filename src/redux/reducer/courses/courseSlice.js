import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  detail: [],
};

const courseSlice = createSlice({
  name: "dataCourses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },

    getAllCourses: (state, action) => {
      state.courses = action.payload;
    },

    updateCourse: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.courses.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.courses[index] = { ...state.courses[index], ...updatedData };
      }
    },

    deleteCourse: (state, action) => {
      const idToDelete = action.payload;
      state.courses = state.courses.filter((item) => item.id !== idToDelete);
      state.detail = null;
    },

    setDetailCourse: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const {
  addCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  setDetailCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
