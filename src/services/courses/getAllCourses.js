// Service Login User

import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const reduxGetAllCourses = async () => {
  return await http.get(`${API_ENDPOINT.GET_ALL_COURSES}?limit=50`);
};

export const reduxGetDetailCoursesId = async (courseId) => {
  return await http.get(`${API_ENDPOINT.GET_COURSE}/${courseId}`);
};

export const reduxGetDetailCoursesMe = async (courseId) => {
  return await http.get(`${API_ENDPOINT.GET_COURSE}/${courseId}/me`);
};