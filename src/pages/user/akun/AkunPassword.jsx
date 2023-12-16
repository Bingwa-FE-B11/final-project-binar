import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { SidebarAkun } from '../../../assets/components/sidebar/SidebarAkun';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp'

// Icons
import { GoArrowLeft } from "react-icons/go";

// Toast
import { showSuccessToast } from '../../../helper/ToastHelper';

// Redux
import { changePass } from '../../../redux/action/akun/changePassAction';

export const AkunPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };
  
  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "old pass") {
        setOldPassword(e.target.value);
      }
      if (e.target.id === "new pass") {
        setNewPassword(e.target.value);
      }
      if (e.target.id === "confirm pass") {
        setConfirmPassword(e.target.value);
      }
    }
  };

  const handleSave = async () => {
    const changePassword = await dispatch(
      changePass(
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
          newPasswordConfirmation: confirmPassword,
        },
        token,
      ),
    );
      setTimeout(() => {
        showSuccessToast("Ganti Password telah Berhasil");
        navigate("/kelas-saya");
      }, 2000);
  };

  return (
    <>
      <div className="mt-[2rem] px-9 lg:px-80 md:px-20 py-10 bg-secondary h-fit lg:h-fit md:h-screen">
        <div className="flex items-center gap-2 py-8 text-lg font-bold text-primary relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-8 lg:-inset-x-16 md:-inset-x-12"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-xl font-semibold text-center text-white rounded-t-lg bg-primary">
            Akun
          </div>

          {/* Isi Akun*/}
          <div className="flex py-4 text-center">
            <SidebarAkun />
            <div className="flex flex-col items-center w-full lg:w-[60%] md:w-[60%] gap-10">              
              <div className="font-bold text-2xl py-2">
                Ubah Password
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Masukkan Password Lama</div>
                <input
                  onChange={handleInput}
                  type={showPassword1 ? "text" : "password"}
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                  value={oldPassword}
                  id="old pass"
                />
                <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                onClick={handleShowPassword1}
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Masukkan Password Baru</div>
                <input
                  onChange={handleInput}
                  type={showPassword2 ? "text" : "password"}
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                  value={newPassword}
                  id="new pass"
                />
                <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                onClick={handleShowPassword2}
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div className="text-left">Ulangi Password Baru</div>
                <input
                  onChange={handleInput}
                  type={showPassword3 ? "text" : "password"}
                  className="px-4 py-3 border-2 w-[18rem] lg:w-[22rem] md:w-[22rem] rounded-2xl border-slate-300 focus:outline-none focus:border-primary"
                  placeholder="*******"
                  value={confirmPassword}
                  id="confirm pass"
                />
                <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-10 right-4"
                onClick={handleShowPassword3}
                />
              </div>
              <button className="px-4 py-3 font-semibold text-white w-[18rem] lg:w-[22rem] md:w-[22rem] bg-primary rounded-2xl hover:bg-primary-hover"
              onClick={handleSave}>
                Ubah Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavbarAkun style={{ zIndex: 1 }} />
    </>
  )
}
