import { reduxForgetPass } from "../../../services/user/auth/ForgetPass";
import { reduxUpdatePass } from "../../../services/user/auth/UpdatePass";
import { setForget, setUpdate } from "../../reducer/auth/Password";

export const getForgetPass = () => (dispatch) => {
    reduxForgetPass().then((result) => {
        dispatch(setForget(result.data.data))
        return result
    }).catch((err) => {
        
    });
}

export const getUpdatePass = (token, data) => async (dispatch) => {
    try {
      const result = await reduxUpdatePass(token, data);
      dispatch(setUpdate(result.data.data));
      return result;
    } catch (error) {
      // Tangani kesalahan jika diperlukan
      console.error("Gagal mengupdate password:", error);
    }
  };