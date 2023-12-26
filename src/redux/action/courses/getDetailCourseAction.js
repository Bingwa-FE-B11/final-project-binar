import { reduxGetDetailCoursesId } from "../../../services/courses/getAllCourses";
import { setDetailCourse } from "../../reducer/courses/courseSlice";

export const getDetailCoursesAction = (courseId) => async (dispatch) => {
  await reduxGetDetailCoursesId(courseId)
    .then((result) => {
      console.log("getDetailCoursesId:", result);
      dispatch(setDetailCourse(result.data.data.course));
      return result;
    })
    .catch((err) => {
      console.error("reduxDetailCourse", err);
    });
};
