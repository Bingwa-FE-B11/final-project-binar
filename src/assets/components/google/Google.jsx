import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CookiesKeys, CookieStorage } from "../../../utils/cookie"
import { FcGoogle } from "react-icons/fc";
import { setToken } from "../../../redux/reducer/auth/loginSlice"
import { showErrorToast, showSuccessToast } from "../../../helper/ToastHelper";
import { useGoogleLogin } from "@react-oauth/google";

function GoogleLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const registerLoginWithGoogleAction = async (accessToken) => {
      try {
        let data = JSON.stringify({
          access_token: accessToken,
        });
  
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${process.env.REACT_APP_SERVER}/users/google`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
  
        const response = await axios.request(config);
        const { token } = response.data.data;
  
        dispatch(setToken(token))
        // Simpan token ke dalam cookies
        CookieStorage.set(CookiesKeys.AuthToken, token)
        showSuccessToast("Login Berhasil!")
        navigate("/")
        
      } catch (error) {
        if (axios.isAxiosError(error)) {
            showErrorToast(error.response.data.message);
          return;
        }
        showErrorToast(error.message);
      }
    };
  
    const loginWithGoogle = useGoogleLogin({
      onSuccess: (responseGoogle) =>
        registerLoginWithGoogleAction(responseGoogle.access_token),
    });
  
    return (
      <button 
        className=" text-black font-bold py-2 px-4"
        onClick={() => loginWithGoogle()}>
          <div className="gap-4 px-2 py-2 text-black flex items-center rounded border-4 shadow-xl">
          <FcGoogle size={30} className="bg-white rounded"/> Sign in with Google
          </div>
      </button>
    );
  }
  
  export default GoogleLogin;