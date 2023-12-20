import { reduxGetAllCourses } from "../../../services/courses/getAllCourses";
import { setCourses } from "../../reducer/courses/getAllCoursesSlice";

export const getAllCoursesAction = () => (dispatch) => {
  reduxGetAllCourses()
    .then((result) => {
      console.log("getAllCoursesAction:", result);
      dispatch(setCourses(result.data.data.courses));
      return true;
    })
    .catch((err) => {
      console.error("reduxAllCourse", err);
    });
};
