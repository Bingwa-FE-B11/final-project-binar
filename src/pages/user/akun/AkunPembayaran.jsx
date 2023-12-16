import React from 'react'
import { useNavigate } from "react-router-dom";

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { CardPremium } from '../../../assets/components/cards/CardPremium';
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Icons
import { GoArrowLeft } from "react-icons/go";

export const AkunPembayaran = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="mt-[2rem] px-9 lg:px-80 md:px-20 py-10 bg-secondary h-fit lg:h-fit md:h-screen">
        <div className="flex items-center gap-2 py-8 text-lg font-bold text-primary relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-8 lg:-inset-x-16 md:-inset-x-12"
            onClick={() => {
              window.location.back();
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
          <div className="flex py-4 text-center">
          <SidebarAkun />

            {/* Riwayat Pembayaran */}
          <div className="flex flex-col items-center w-full lg:w-[60%] md:w-[60%]">
            <div className="text-2xl font-bold text-center py-4">Riwayat Pembayaran</div>

            {/* Main Content */}
            <div className="space-y-6 px-4">
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
      <NavbarAkun style={{ zIndex: 1 }} />
    </>
  )
}
