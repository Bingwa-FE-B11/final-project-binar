import React from 'react'

// Components
import { NavbarAkun } from "../assets/components/navbar/NavbarAkun";
import { CardPremium } from '../assets/components/cards/CardPremium';

// Icons
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

export const AkunPembayaran = () => {
    const navigate = useNavigate();
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

          {/* Isi Akun */}
          <div className="flex items-start justify-between py-4 pl-4">
            <div className="flex flex-col bg-white rounded-xl w-[30%]">
            {/* Kolom */}
            <div className="flex flex-col space-y-3 font-medium">
              <div className="flex items-center px-6">
              <div className='text-primary'><BiEditAlt /></div>
                <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Profil Saya 
              </div>
              <div className="flex items-center px-6">
              <div className='text-primary'><CiSettings /></div>
                <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Ubah Password
              </div>
              <div className="flex items-center px-6">
              <div className='text-primary'><AiOutlineShoppingCart /></div>
                <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Riwayat Pembayaran
              </div>
              <div className="flex items-center px-6">
              <div className='text-primary'><GoSignOut /></div>
                <input type="text" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Keluar
              </div>
            </div>

            {/* Version */}
            <div className="text-center py-10 font-medium text-slate-400">Version 11.0</div>
            </div>

            {/* Riwayat Pembayaran */}
          <div className="px-10 flex flex-wrap items-center justify-between font-semibold w-[65%]">
            <div className="w-full text-xl font-bold items-center text-center">Riwayat Pembayaran</div>

            {/* Main Content */}
            <div className="py-5 w-full grid-cols-2 gap-20">
              {/* Card Item */}
              <CardPremium
                category={'Web Development'}
                rating={4.5}
                title={'Belajar ReactJS untuk pemula'}
                author={'Eren Saputra'}
                level={'Basic'}
                modul={10}
                duration={120}
                kelas={'Waiting for Payment'} //merah harusnya
              />

              <div className="py-5 w-full grid-cols-2 gap-20">  
              <CardPremium
                category={'UI/UX Design'}
                rating={4.7}
                title={'Belajar Web Design dengan Figma'}
                author={'Angela Doe'}
                level={'Intermediate'}
                modul={10}
                duration={120}
                kelas={'paid'} //hijau harusnya
              /> 
              </div>           
            </div>
          </div>
        
        </div>
        </div>
      </div>
    </>
  )
}
