import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Images
import BrandLogo from "../../assets/img/brain.webp";
import { useNavigate } from "react-router-dom";

// Function
import { reduxForgetPass } from "../../services/user/auth/ForgetPass";
import { setForget } from "../../redux/reducer/auth/Password";

// Toast
import toast from "react-hot-toast";

export const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgetPass = () => {
    reduxForgetPass(email)
      .then((result) => {
        dispatch(setForget(result.data.data));
        toast.success("Tautan reset password terkirim");
        setTimeout(() => {
          navigate("/reset-password");
        }, 1000);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/5">
        <div className="flex flex-col w-[30rem] mx-auto">
          <span className="items-center pb-2 text-4xl font-bold text-primary">
            Forget Password
          </span>

          {/* Konfirmasi Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Email</span>
            </div>
            <div className="relative flex flex-col">
              <input
                value={email}
                onChange={handleEmailChange}
                placeholder="Masukkan Email"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="email"
              />
            </div>
          </div>

          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
              onClick={handleForgetPass}
            >
              Masuk
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/5 h-screen bg-primary">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">
            Bingwa
          </span>
        </div>
      </div>
    </div>
  );
};
