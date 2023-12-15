import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Components
import { NavbarAkun } from '../../../assets/components/navbar/NavbarAkun';
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { IoImageOutline } from 'react-icons/io5';

// Redux Action
import { PutUpdateProfile, getUpdateCountry } from '../../../redux/action/auth/getUserProfileAction';

// Helper
import { showSuccessToast } from '../../../helper/ToastHelper';


export const AkunProfile = () => {
  const Data = useSelector((state) => state.authLogin);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const dispatch = useDispatch();
  
  const [image, setImage] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
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
  
  const handleInputEmail = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
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
  
  const formData = new FormData()
  formData.append("city", city)
  formData.append("country", country)

  const handleInputCountry = (e) => {
    if (e) {
      if (e.target.id === "country") {
        setCountry(e.target.value);
      }
    }
  };

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
                  id="name"
                  onChange={handleInputName}
                  value={fullName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="bingwa@gmail.com"
                  id="email"
                  onChange={handleInputEmail}
                  value={email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
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
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
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
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
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
