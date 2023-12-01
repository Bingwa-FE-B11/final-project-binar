import React from 'react'

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { CardPremium } from '../../../assets/components/cards/CardPremium';
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Icons
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const AkunPembayaran = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="mt-[5rem] bg-secondary h-[10rem] px-80">
        <div className="flex items-center gap-2 py-8 text-lg font-bold text-primary relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-16"
            onClick={() => {
              navigate("/kelas-saya");
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
          <div className="flex flex-col w-[60%] px-10">
            <div className="text-2xl font-bold text-center py-4">Riwayat Pembayaran</div>

            {/* Main Content */}
            <div className="py-2 space-y-6">
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
