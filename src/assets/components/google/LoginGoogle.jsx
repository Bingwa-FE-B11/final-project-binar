import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleLoginAction } from "../../../redux/action/auth/getGoogleLoginAction";
import { reduxGoogleLoginUser } from "../../../services/user/auth/LoginUser";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginGoogle = () => {
  const dispatch = useDispatch();

  const handleLoginGoogle = async (e) => {
    e.preventDefault();
    window.location = "https://bingwa-b11.vercel.app/api/v1/users/google";
  };

  return (
    <button
      className="cursor-pointer font-bold text-red-600"
      onClick={handleLoginGoogle}
    >
      Login dengan Google
    </button>
  );
};
