import { reduxGetAllEnrollments } from "../../../services/enrollments/getAllEnrollments";
import { setCourseEnroll } from "../../reducer/enrollments/EnrollmentsSlice";

export const getAllEnrollmentsAction = () => (dispatch) => {
    reduxGetAllEnrollments()
    .then((result) => {
      console.log("getAllEnrollmentsAction:", result);
      dispatch(setCourseEnroll(result.data.data.enrollments));
      return true;
    })
    .catch((err) => {
      console.error("reduxAllEnrollments", err);
    });
};
