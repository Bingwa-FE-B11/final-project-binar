import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// Images
import EyePassword from "../../../assets/img/fi_eye.webp";
import BrandLogo from "../../../assets/img/brain.webp";

// Redux
import { getUpdatePass } from "../../../redux/action/auth/getPasswordAction";

// Toast
import { showSuccessToast } from "../../../helper/ToastHelper";

export const UpdatePass = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setpasswordConfirmation] = useState("");

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "newPassword") {
        setPassword(e.target.value);
      }
      if (e.target.id === "confirmPassword") {
        setpasswordConfirmation(e.target.value);
      }
    }
  };

  const handleSave = async () => {
    const updatepass = await dispatch(
      getUpdatePass(
        {
          password: password,
          passwordConfirmation: passwordConfirmation,
        },
        token,
      ),
    );
    showSuccessToast("Upadate Password Berhasil");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto w-full rounded-lg md:mt-0 md:max-w-md">
        <div className="mx-auto flex w-[22rem] flex-col lg:w-[30rem]">
          <span className="items-center pb-2 text-4xl font-bold text-primary">
            Reset Password
          </span>

          {/* Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-left text-lg">Masukkan Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                onChange={handleInput}
                placeholder="Password Baru"
                className="rounded-xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                type={showPassword1 ? "text" : "password"}
                value={password}
                id="newPassword"
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute inset-y-2.5 right-4 w-8 cursor-pointer text-black"
                onClick={handleShowPassword1}
              />
            </div>
          </div>

          {/* Konfirmasi Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-left text-lg">Ulangi Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                onChange={handleInput}
                placeholder="Ulangi Password Baru"
                className="rounded-xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                type={showPassword2 ? "text" : "password"}
                value={passwordConfirmation}
                id="confirmPassword"
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute inset-y-2.5 right-4 w-8 cursor-pointer text-black"
                onClick={handleShowPassword2}
              />
            </div>
          </div>

          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="mt-2 rounded-xl bg-primary py-3 text-lg font-semibold text-white hover:bg-primary-hover"
              onClick={handleSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="hidden h-screen w-2/5 items-center justify-center bg-primary lg:flex">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="text-center font-sans text-6xl text-white">
            Bingwa
          </span>
        </div>
      </div>
    </div>
  );
};
