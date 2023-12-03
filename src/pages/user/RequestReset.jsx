import React from "react";

// Images
import BrandLogo from "../../assets/img/brain.webp";
import { useNavigate } from "react-router-dom";

export const RequestReset = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/5">
        <div className="flex flex-col w-[30rem] mx-auto">
          <span className="items-center pb-2 text-4xl font-bold text-primary">
            Request Reset Password
          </span>

          {/* Konfirmasi Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Email</span>
            </div>
            <div className="relative flex flex-col">
              <input
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
              onClick={()=>{navigate("/reset-password")}}
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
