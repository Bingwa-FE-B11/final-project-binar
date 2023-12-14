import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import { NavbarAkun } from '../../../assets/components/navbar/NavbarAkun';
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { IoImageOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';


export const AkunProfile = () => {
  const Data = useSelector((state) => state.authLogin);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    image: "",
    fullName: "",
    phoneNumber: "",
    country: "",
    city: "",
  });
  console.log("Data", Data)


  return (
    <>
      <div className="mt-[5rem] h-[10rem] bg-secondary lg:px-80">
        <div className="flex items-center gap-2 px-2 py-8 text-lg font-bold text-primary lg:relative lg:px-0">
          <GoArrowLeft
            size={30}
            className="cursor-pointer lg:absolute lg:-inset-x-16"
            onClick={() => {
              navigate("/kelas-saya");
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="rounded-xl border-2 border-primary">
          <div className="rounded-t-lg bg-primary py-4 text-center text-xl font-semibold text-white">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex w-[60%] flex-col items-center gap-4">
              <div className="relative h-20 w-20 rounded-full border-[3px] border-primary">
                <div className="absolute bottom-0 right-0 w-fit rounded-full bg-white text-primary">
                  <IoImageOutline size={25} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nama</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Bingwa"
                  value={Data.user.userProfile.fullName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="bingwa@gmail.com"
                  value={Data.user.email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="08123456789"
                  value={Data.user.userProfile.phoneNumber}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Negara</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Indonesia"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Kota</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Jakarta"
                />
              </div>
              <button className="w-[22rem] rounded-2xl bg-primary px-4 py-3 font-semibold text-white hover:bg-primary-hover">
                Simpan Profil Saya
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavbarAkun style={{ zIndex: 1 }} />
    </>
  );
};
