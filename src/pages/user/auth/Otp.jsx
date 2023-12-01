import React from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import BrandLogo from '../../../assets/img/brain.webp';

// Icons
import { GoArrowLeft } from 'react-icons/go';

export const Otp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen md:flex-row">
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md xl:p-0 p-6 ">
        <div className="flex flex-col w-full mx-auto">
          <div className="absolute top-[120px] left-[108px] cursor-pointer">
            <GoArrowLeft
              size={25}
              className="items-center"
              onClick={() => {
                navigate('/Register');
              }}
            />
          </div>
          <span className="items-center pb-10 text-3xl font-bold text-primary">Masukkan OTP</span>

          {/* Masukkan Kode OTP */}
          <div className="flex flex-col gap-2">
            <span className="pb-5 pt-4 text-lg text-center">
              Ketik 6 digit kode yang dikirim ke{" "}
              <span className='font-bold'>bingwa@gmail.com</span>
            </span>

            {/* Lingkaran Otp */}
            <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-xl">
                <input
                  placeholder=""
                  className="w-full h-full font-semibold text-center border rounded-xl border-primary"
                  type="text"
                />
              </div>
            </div>

            <span className="py-4 pb-5 text-lg text-center">Kirim ulang OTP dalam 60 detik</span>
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
