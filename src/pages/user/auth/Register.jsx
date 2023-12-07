import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';

// Redux
import { RegisterUser } from '../../../redux/action/auth/authRegisterSlice';

// Toast
import toast from 'react-hot-toast';

export const Register = () => {
  const navigate = useNavigate();
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "nama") {
        setFullName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "telepon") {
        setPhoneNumber(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleRegister = async () => {
    const register = await dispatch(RegisterUser({
      fullName: FullName,
      email: Email,
      phoneNumber: PhoneNumber,
      password: Password,
    }));
    if (register) {
      toast.success("Tautan Verifikasi telah dikirim!");
      setTimeout(() => {
        navigate(`/otp?email=${encodeURIComponent(Email)}`)
      }, 1000);
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full mx-auto rounded-lg md:mt-0 md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <span className="items-center pb-10 text-4xl font-bold text-primary">Daftar</span>

          {/* Nama */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Nama</span>
              <input
                placeholder="Nama Lengkap"
                onChange={handleInput}
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="text"
                value={FullName}
                id="nama"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Email</span>
              <input
                placeholder="bingwa@gmail.com"
                onChange={handleInput}
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="email"
                value={Email}
                id="email"
              />
            </div>

            {/* Nomor Telepon */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Nomor Telepon</span>
              <input
                placeholder="08"
                onChange={handleInput}
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="tel"
                value={PhoneNumber}
                id="telepon"
              />
            </div>

            {/* Buat Password */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Buat Password</span>
              <div className="relative flex flex-col">
                <input
                  placeholder="Masukkan Password"
                  onChange={handleInput}
                  className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                  type={showPassword ? "text" : "password"}
                  value={Password}
                  id="password"
                />
                <img
                  src={EyePassword}
                  alt="Icon Eye Password"
                  className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
                  onClick={handleShowPassword}
                />
              </div>
            </div>

            {/* Button Daftar */}
            <div className="flex flex-col">
              <button
                type="button"
                className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
                onClick={() => {
                  handleRegister()
                }}
              >
                Daftar
              </button>
            </div>

            <div className="text-center">
              <span className="items-center justify-center py-8 text-center text-black">
                Sudah punya akun?
                <span
                  className="px-2 font-bold cursor-pointer text-primary"
                  onClick={() => {
                    navigate('/Login');
                  }}
                >
                  Masuk di sini
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center justify-center hidden w-2/5 h-screen lg:flex bg-primary">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">Bingwa</span>
        </div>
      </div>
    </div>
  );
};
