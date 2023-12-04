import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Images
import EyePassword from '../../assets/img/fi_eye.webp';
import BrandLogo from '../../assets/img/brain.webp';

// Redux
import { getUpdatePass } from '../../redux/action/auth/Password';

export const UpdatePass = () => {
  // const navigate = useNavigate()
  // const { token } = useParams();
  // const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  // const handleSave = () => {
  //   // Periksa apakah password baru dan konfirmasi password cocok
  //   if (newPassword === confirmPassword) {
  //     // Panggil aksi getUpdatePass untuk memperbarui password
  //     dispatch(getUpdatePass(token, { newPassword }));
  //     navigate("/kelas-saya")
  //   } else {
  //     // Tampilkan pesan bahwa password tidak cocok
  //     console.error("Password tidak cocok");
  //   }
  // };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <span className="items-center pb-2 text-4xl font-bold text-primary">Reset Password</span>

          {/* Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Masukkan Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                placeholder="Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type={showPassword1 ? "text" : "password"}
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
                onClick={handleShowPassword1}
              />
            </div>
          </div>

          {/* Konfirmasi Password Baru */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Ulangi Password Baru</span>
            </div>
            <div className="relative flex flex-col">
              <input
                placeholder="Ulangi Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type={showPassword2 ? "text" : "password"}
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
                onClick={handleShowPassword2}
              />
            </div>
          </div>

          {/* Button Simpan */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
              // onClick={handleSave}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center justify-center w-2/5 h-screen bg-primary hidden">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">Bingwa</span>
        </div>
      </div>
    </div>
  );
};
