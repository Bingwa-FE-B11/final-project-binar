import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  detail: [],
  me: [],
  searchedCourses: [],
  loading: false,
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

    setMe: (state, action) => {
      state.me = action.payload;
    },

    setSearchedCourses: (state, action) => {
      state.searchedCourses = action.payload;
    },

    startLoading: (state) => {
      state.loading = true;
    },

    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  setDetailCourse,
  setMe,
  setSearchedCourses,
  startLoading,
  endLoading,
} = courseSlice.actions;

export default courseSlice.reducer;
