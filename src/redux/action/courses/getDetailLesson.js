import { reduxGetDetailCoursesMe } from "../../../services/courses/getAllCourses";
import { setMe } from "../../reducer/courses/getAllCoursesSlice";

export const getDetailLessonAction = (courseId) => async (dispatch) => {
  await reduxGetDetailCoursesMe(courseId)
    .then((result) => {
      console.log("getDetailLesson:", result);
      dispatch(setMe(result.data.data.course));
      return result;
    })
    .catch((err) => {
      console.error("reduxDetailLesson", err);
    });
};