import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';
import { RegisterUser } from '../../../redux/action/auth/authRegisterSlice';

export const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "fullName") {
        setFullName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "phoneNumber") {
        setPhoneNumber(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleRegister = async () => {
    const register = await dispatch(RegisterUser({
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    }));
    if (register) {
      navigate("/otp")
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <span className="items-center pb-10 text-4xl font-bold text-primary">Daftar</span>

          {/* Nama */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Nama</span>
              <input
                placeholder="Nama Lengkap"
                onChange={handleInput} id='fullName'
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="text"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Email</span>
              <input
                placeholder="bingwa@gmail.com"
                onChange={handleInput} id='email'
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="email"
              />
            </div>

            {/* Nomor Telepon */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Nomor Telepon</span>
              <input
                placeholder="+62"
                onChange={handleInput} id='phoneNumber'
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type="tel"
              />
            </div>

            {/* Buat Password */}
            <div className="flex flex-col gap-2">
              <span className="text-lg text-left">Buat Password</span>
              <div className="relative flex flex-col">
                <input
                  placeholder="Masukkan Password"
                  onChange={handleInput} id='password'
                  className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                  type={showPassword ? "text" : "password"}
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
                  navigate('/OTP');
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

      <div className="lg:flex items-center justify-center w-2/5 h-screen bg-primary hidden">
        <div className="flex items-center justify-center gap-6">
          <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
          <span className="font-sans text-6xl text-center text-white">Bingwa</span>
        </div>
      </div>
    </div>
  );
};
