import React from 'react';
import EyePassword from '../assets/img/fi_eye.webp';
import BrandLogo from '../assets/img/brain.webp';

export const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-3/5">
        <div className="flex flex-col w-[30rem] mx-auto">
          <span className="items-center pb-2 text-4xl font-bold text-primary">Reset Password</span>

          {/* Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Masukkan Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                placeholder="Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="password"
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
              />
            </div>
          </div>

          {/* Konfirmasi Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Ulangi Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                placeholder="Ulangi Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="password"
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
              />
            </div>
          </div>

          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/5 h-screen bg-primary">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">Bingwa</span>
        </div>
      </div>
    </div>
  );
};
