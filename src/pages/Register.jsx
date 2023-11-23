import React from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/5 px-60">
        <h1 className="text-4xl font-bold pb-6 items-center text-[rgba(97,72,255,1)]">
          Daftar
        </h1>
        <div className="items-center">
          <h1 className="text-lg font-normal text-left w-96">Nama</h1>
          <input
            placeholder="Nama Lengkap"
            className="border-2 border-black w-96 py-2 px-2 rounded-xl text-center"
            type="text"
          />

          <h1 className="text-lg font-normal text-left w-96 pt-4">Email</h1>
          <input
            placeholder="Masukkan Email"
            className="border-2 border-black w-96 py-2 px-2 rounded-xl text-center"
            type="email"
          />

          <h1 className="text-lg font-normal text-left w-96 pt-4">
            No Telepon
          </h1>
          <input
            placeholder="Masukkan No Telepon"
            className="border-2 border-black w-96 py-2 px-2 rounded-xl text-center"
            type="text"
          />

          <div className="w-96 pt-4">
            <h1 className="text-lg font-normal text-left w-96">
              Buat Password
            </h1>
          </div>

          <div className="relative">
            <input
              placeholder="Buat Password"
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
            Daftar
          </button>

          <div className="pt-6 px-16">
            <span className="py-8 justify-center items-center text-black text-center">
              Sudah punya akun?
              <span
                className="px-2 cursor-pointer font-bold text-[rgba(97,72,255,1)]"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Masuk di sini
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
