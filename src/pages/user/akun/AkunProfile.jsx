import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import { NavbarAkun } from '../../../assets/components/navbar/NavbarAkun';
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { IoImageOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { PutUpdateProfile, getUpdateCountry } from '../../../redux/action/auth/getUserProfileAction';

import { showSuccessToast } from '../../../helper/ToastHelper';

export const AkunProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleInputName = (e) => {
    if (e) {
      if (e.target.id === "name") {
        setfullName(e.target.value);
      }
    }
  };
  
  const handleInputPhone = (e) => {
    if (e) {
      if (e.target.id === "phone") {
        setPhoneNumber(e.target.value);
      }
    }
  };

  const handleInputCountry = (e) => {
    if (e) {
      if (e.target.id === "country") {
        setCountry(e.target.value);
      }
    }
  };

  const formData = new FormData()
  formData.append("city", city)
  formData.append("country", country)

  const handleInputCity = (e) => {
    if (e) {
      if (e.target.id === "city") {
        setCity(e.target.value);
      }
    }
  };

  const handlSave = async () => {
    const updateprofile = await dispatch(
      PutUpdateProfile(
        {
          image : "image",
          fullName : fullName,
          phoneNumber : phoneNumber ,
          country: country,
          city: city,
        },
        token,
      ),
    );
    console.log(updateprofile , "updateprofile");
    showSuccessToast("Upadate Profile Berhasil");
  };

  return (
    <>
      <div className="mt-[5rem] bg-secondary h-[10rem] lg:px-80">
        <div className="flex items-center py-8 lg:px-0 px-2 gap-2 text-lg font-bold text-primary lg:relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer lg:absolute lg:-inset-x-16"
            onClick={() => {
              navigate('/kelas-saya');
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex flex-col items-center w-[60%] gap-4">
              <div className="w-20 h-20 border-[3px] rounded-full border-primary relative">
                <div className="absolute bottom-0 right-0 bg-white rounded-full text-primary w-fit">
                  <IoImageOutline size={25} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nama</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Bingwa"
                  id="name"
                  onChange={handleInputName}
                  value={fullName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="bingwa@gmail.com"
                  
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="08123456789"
                  id="phone"
                  onChange={handleInputPhone}
                  value={phoneNumber}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Negara</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Indonesia"
                  id="country"
                  onChange={handleInputCountry}
                  value={country}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Kota</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Jakarta"
                  id="city"
                  onChange={handleInputCity}
                  value={city}
                />
              </div>
              <button className="px-4 py-3 font-semibold text-white w-[22rem] bg-primary rounded-2xl hover:bg-primary-hover" 
              onClick={handlSave}>
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
