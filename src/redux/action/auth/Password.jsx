import toast from "react-hot-toast";
import { reduxForgetPass } from "../../../services/user/auth/ForgetPass";
import { reduxUpdatePass } from "../../../services/user/auth/UpdatePass";
import { setForget, setUpdate } from "../../reducer/auth/Password";

export const getForgetPass = (email) => async (dispatch) => {
  return reduxForgetPass(email).then((result) => {
    dispatch(setForget(result.data.data));
    return true
    }).catch((err) => {
      if (err.response) {
        if (err.response.status >= 400 && err.response.status <= 500) {
          toast.error(err.response.data.message);
          console.log(err.response.status = 500, "error")
        } else {
          console.error("unexpected Error", err)
        }
      }
    });
  }

export const getUpdatePass = (token, data) => async (dispatch) => {
  reduxUpdatePass(token).then((result) => {
    dispatch(setUpdate(result.data.data))
    return result
  }).catch((err)=>{
    if (err.response) {
      if (err.response.status >= 400 && err.response.status <= 500) {
        toast.error(err.response.data.message);
      } else {
        console.error("unexpected Error", err)
      }
    }
  })
}

// export const getUpdatePass = (token, data) => async (dispatch) => {
//     try {
//         const result = await reduxUpdatePass(token, data);
//         dispatch(setUpdate(result.data.data));
//         return result;
//     } catch (error) {
//         // Tangani kesalahan jika diperlukan
//         console.error("Gagal mengupdate password:", error);
//     }
// };
