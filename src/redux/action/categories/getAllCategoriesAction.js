import { reduxGetAllCategories } from "../../../services/categories/getAllCategories";
import { setCategories } from "../../reducer/categories/getAllCategoriesSlice";


export const getAllCategoriesAction = () => (dispatch) => {
  reduxGetAllCategories()
    .then((result) => {
      console.log("getAllCategoriesAction:", result);
      dispatch(setCategories(result.data.data.categories));
      return true;
    })
    .catch((err) => {
      console.error("reduxGetUser", err);
    });
};
