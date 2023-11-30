import React, { useState } from 'react'

// Components
import { NavbarAkun } from "../assets/components/navbar/NavbarAkun";

// Icons
import { GoArrowLeft } from "react-icons/go";
import EyePassword from '../assets/img/fi_eye.webp'
import { BiEditAlt } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GoSignOut } from 'react-icons/go';
import { useNavigate } from "react-router-dom";

export const AkunPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <NavbarAkun />
      <div className="mt-[5rem] bg-secondary h-[10rem] px-80">
        <div className="flex py-8 items-center gap-2 text-primary text-lg font-bold">
          <GoArrowLeft
            size={30}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-center text-xl font-semibold text-white bg-primary rounded-t-lg">
            Akun
          </div>
          {/* Isi Akun*/}
          <div className="flex items-start justify-between py-4 pl-4">
            <div className="flex flex-col bg-white rounded-xl w-[30%]">
              <div className="flex flex-col space-y-3 font-medium">
                <div className="flex items-center px-6">
                  <div className='text-primary' style={{ fontSize: '20px' }}><BiEditAlt /></div>
                  <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                  <span style={{ fontSize: '20px' }}>Profil Saya</span>
                </div>
                <div className="flex items-center px-6">
                  <div className='text-primary' style={{ fontSize: '24px' }}><CiSettings /></div>
                  <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                  <span style={{ fontSize: '20px' }}>Ubah Password</span>
                </div>
                <div className="flex items-center px-6">
                  <div className='text-primary' style={{ fontSize: '24px' }}><AiOutlineShoppingCart /></div>
                  <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                  <span style={{ fontSize: '20px' }}>Riwayat Pembayaran</span>
                </div>
                <div className="flex items-center px-6">
                  <div className='text-primary' style={{ fontSize: '24px' }}><GoSignOut /></div>
                  <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                  <span style={{ fontSize: '20px' }}>Keluar</span>
                </div>
              </div>
            </div>

            {/* Isi Akun */}
            <div className="flex flex-wrap items-center justify-between font-semibold w-[65%]">
              <div className="flex w-full gap-4 text-center">
                <span className="pb-10 text-3xl font-bold  text-black">Ubah Password
                </span>
              </div>
              {/* Password Lama */}
              <div className="grid w-full grid-cols-1 gap-6 py-4">
                <div className="flex justify-between">
                  <span className="text-lg text-left">Masukkan Password Lama</span>
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="Masukkan Password Lama"
                    className="px-2 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary w-1/2"
                    type={showPassword ? "text" : "password"}
                  />
                  <img
                    src={EyePassword}
                    alt="Icon Eye Password"
                    className="w-8 text-black cursor-pointer ml-3"
                  />
                </div>
              </div>


              {/* Password Baru */}
              <div className="grid w-full grid-cols-1 gap-6 py-4">
                <div className="flex justify-between">
                  <span className="text-lg text-left">Masukkan Password Baru</span>
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="Masukkan Password Baru"
                    className="px-2 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary w-1/2"
                    type={showPassword ? "text" : "password"}
                  />
                  <img
                    src={EyePassword}
                    alt="Icon Eye Password"
                    className="w-8 text-black cursor-pointer ml-3"
                  />
                </div>
              </div>
              {/* Ulangi Password Baru */}
              <div className="grid w-full grid-cols-1 gap-6 py-4">
                <div className="flex justify-between">
                  <span className="text-lg text-left"> Ulangi Password Baru</span>
                </div>
                <div className="flex items-center">
                  <input
                    placeholder="Ulangi Password Baru"
                    className="px-2 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary w-1/2"
                    type={showPassword ? "text" : "password"}
                  />
                  <img
                    src={EyePassword}
                    alt="Icon Eye Password"
                    className="w-8 text-black cursor-pointer ml-3"
                  />
                </div>
              </div>
              {/* Button */}
              <button
                type="button"
                className="w-1/2 py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
              >
                Ubah Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
