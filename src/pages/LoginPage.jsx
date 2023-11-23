import React from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/5 px-60">
        <h1 className="text-4xl font-bold pb-10 items-center text-[rgba(97,72,255,1)]">
          Masuk
        </h1>
        <div className="items-center">
          <h1 className="text-lg font-normal text-left w-96">
            Email/No Telepon
          </h1>
          <input
            placeholder="Masukkan Email / No Telepon"
            className="border-2 border-black w-96 py-2 px-2 rounded-xl text-center"
            type="email"
          />

          <div className="flex justify-between w-96 pt-8">
            <h1 className="text-lg font-normal text-left w-96">Password</h1>
            <h1
              className="text-lg font-normal text-right w-96 text-[rgba(97,72,255,1)] cursor-pointer"
              onClick={() => {
                navigate("/ResetPassword");
              }}
            >
              Lupa Kata Sandi
            </h1>
          </div>

          <div className="relative">
            <input
              placeholder="Masukkan Password"
              className="border-2 border-black w-96 py-2 px-2 rounded-xl text-center"
              type="password"
            />
            <AiFillEye
              className="absolute inset-y-3 right-20 text-black cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <button
            type="button"
            className="px-9 py-2 bg-[rgba(97,72,255,1)] text-white rounded-xl mt-2 w-96"
          >
            Masuk
          </button>

          <div className="pt-6 px-16">
            <span className="py-8 justify-center items-center text-black text-center">
              Belum punya akun?
              <span
                className="px-2 cursor-pointer font-bold text-[rgba(97,72,255,1)]"
                onClick={() => {
                  navigate("/Register");
                }}
              >
                Daftar di sini
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-2/5 bg-[rgba(97,72,255,1)] h-screen items-center justify-center ">
        <span className="text-center text-white text-6xl font-sans">
          Bingwa
        </span>
      </div>
    </div>
  );
};
