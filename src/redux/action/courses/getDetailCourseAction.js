import { reduxGetDetailCoursesId } from "../../../services/courses/getAllCourses";
import { setDetail } from "../../reducer/courses/getAllCoursesSlice";

export const getDetailCoursesAction = (courseId) => async (dispatch) => {
  await reduxGetDetailCoursesId(courseId)
    .then((result) => {
      console.log("getDetailCoursesId:", result);
      dispatch(setDetail(result.data.data.course));
      return result;
    })
    .catch((err) => {
      console.error("reduxDetailCourse", err);
    });
};
