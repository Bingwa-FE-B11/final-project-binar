import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Images
import BrandLogo from "../../assets/img/brain.webp";
import { useNavigate } from "react-router-dom";

// Redux
import { reduxForgetPass } from "../../services/user/auth/ForgetPass";
import { setForget } from "../../redux/reducer/auth/Password";

// Toast
import toast from "react-hot-toast";

// Icons
import { GoArrowLeft } from "react-icons/go";

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
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <div className="absolute lg:top-[120px] lg:left-[108px] cursor-pointer top-[100px]">
              <GoArrowLeft
                size={25}
                className="items-center"
                onClick={() => {
                  navigate("/login");
                }}
              />
            </div>
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

      <div className="lg:flex items-center justify-center w-2/5 h-screen bg-primary hidden">
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
