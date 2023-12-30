import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoogleLoginAction } from "../../../redux/action/auth/getGoogleLoginAction";
import { reduxGoogleLoginUser } from "../../../services/user/auth/LoginUser";
import { useNavigate } from "react-router-dom";

export const LoginGoogle = () => {
  const dispatch = useDispatch();

  const handleLoginGoogle = () => {
    dispatch(getGoogleLoginAction());
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
