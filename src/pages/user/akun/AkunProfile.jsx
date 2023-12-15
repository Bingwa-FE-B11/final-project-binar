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
                  value={newFullName}
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-left">Email</div>
                <input
                  type="text"
                  className="w-[22rem] rounded-2xl border-2 border-slate-300 px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="bingwa@gmail.com"
                  value={Data.user?.email}
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
                  value={newPhoneNumber}
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
                  value={newCity}
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
                  value={newCountry}
                />
              </div>
              <button
                className="w-[22rem] rounded-2xl bg-primary px-4 py-3 font-semibold text-white hover:bg-primary-hover"
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
