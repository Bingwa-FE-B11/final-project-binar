import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { SidebarAkun } from "../../../assets/components/sidebar/SidebarAkun";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoImageOutline } from "react-icons/io5";

// Redux Action
import { putUpdateProfile } from "../../../redux/action/auth/getUserProfileAction";
import {
  showLoadingToast,
  showSuccessToast,
} from "../../../helper/ToastHelper";
import toast from "react-hot-toast";

export const AkunProfile = () => {
  const Data = useSelector((state) => state.authLogin);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [newFullName, setNewFullName] = useState(Data.userProfile?.fullName);
  const [newPhoneNumber, setNewPhoneNumber] = useState(
    Data.userProfile?.phoneNumber,
  );
  const [newCity, setNewCity] = useState(Data.userProfile?.city);
  const [newCountry, setNewCountry] = useState(Data.userProfile?.country);

  const handleInputName = (e) => {
    if (e) {
      if (e.target.id === "name") {
        setNewFullName(e.target.value);
      }
    }
  };

  const handleInputPhone = (e) => {
    if (e) {
      if (e.target.id === "phone") {
        setNewPhoneNumber(e.target.value);
      }
    }
  };

  const handleInputCity = (e) => {
    if (e) {
      if (e.target.id === "city") {
        setNewCity(e.target.value);
      }
    }
  };

  const handleInputCountry = (e) => {
    if (e) {
      if (e.target.id === "country") {
        setNewCountry(e.target.value);
      }
    }
  };

  const handleSave = async () => {
    const loadingToastId = showLoadingToast("Loading . . .");

    const update = await dispatch(
      putUpdateProfile({
        image: "image",
        fullName: newFullName,
        phoneNumber: newPhoneNumber,
        city: newCity,
        country: newCountry,
      }),
    );

    toast.dismiss(loadingToastId);

    if (update) {
      showSuccessToast("Update Profil Berhasil!");
    }
  };

  console.log("Data", Data);

  return (
    <>
      <div className="mt-[2rem] px-9 lg:px-80 md:px-20 py-10 bg-secondary h-fit lg:h-fit md:h-screen">
        <div className="flex items-center gap-2 py-8 text-lg font-bold text-primary relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-8 lg:-inset-x-16 md:-inset-x-12"
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
            <div className="flex flex-col items-center w-full lg:w-[60%] md:w-[60%] gap-4">
              <div className="w-20 h-20 border-[3px] rounded-full border-primary relative">
                <div className="absolute bottom-0 right-0 bg-white rounded-full text-primary w-fit">
                  <IoImageOutline size={25} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nama</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Bingwa"
                  id="name"
                  onChange={handleInputName}
                  value={newFullName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="bingwa@gmail.com"
                  value={Data.user?.email}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Nomor Telepon</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="08123456789"
                  id="phone"
                  onChange={handleInputPhone}
                  value={newPhoneNumber}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Kota</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Jakarta"
                  id="city"
                  onChange={handleInputCity}
                  value={newCity}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Negara</div>
                <input
                  type="text"
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="Indonesia"
                  id="country"
                  onChange={handleInputCountry}
                  value={newCountry}
                />
              </div>
              <button 
                className="px-4 py-3 font-semibold text-white w-[18rem] lg:w-[22rem] md:w-[22rem] bg-primary rounded-2xl hover:bg-primary-hover"
                onClick={handleSave}
              >
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
