import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';

// Redux
import { LoginUser } from '../../../redux/action/auth/Login';

// Toast
import toast from 'react-hot-toast';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleLogin = async () => {
    const login = await dispatch(LoginUser({
      emailOrPhoneNumber: Email,
      password: Password,
    }));
    if (login) {
      toast.success("Login Berhasil!")
      setTimeout(() => {
        navigate("/kelas-saya");
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full rounded-lg md:mt-0 mx-auto md:max-w-md">
        <div className="flex flex-col lg:w-[30rem] mx-auto w-[22rem]">
          <span className="items-center pb-10 text-4xl font-bold text-primary">Masuk</span>

          {/* Email atau No Telepon */}
          <form>
          <div className="flex flex-col gap-2">
            <span className="text-lg text-left">Email/No Telepon</span>
            <input
              placeholder="bingwa@gmail.com"
              onChange={handleInput}
              className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
              type="email"
              value={Email}
              id="email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 pt-8">
            <div className="flex justify-between">
              <span className="text-lg text-left">Password</span>
              <span
                className="text-lg font-semibold cursor-pointer text-primary"
                onClick={() => {
                  navigate('/forget-password');
                }}
              >
                Lupa Kata Sandi
              </span>
            </div>
            <div className="relative flex flex-col">
              <input
                placeholder="Masukkan Password"
                onChange={handleInput}
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                value={Password}
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete='off'
              />
              <img
                src={EyePassword}
                alt="Icon Eye Password"
                className="absolute w-8 text-black cursor-pointer inset-y-2.5 right-4"
                onClick={handleShowPassword}
              />
            </div>
          </div>

          {/* Button Masuk */}
          <div className="flex flex-col py-4">
            <button
              type="button"
              className="py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
              onClick={()=>{handleLogin()}}
            >
              Masuk
            </button>

            <div className="pt-6 text-center">
              <span className="items-center justify-center py-8 text-center text-black">
                Belum punya akun?
                <span
                  className="px-2 font-bold cursor-pointer text-primary"
                  onClick={() => {
                    navigate('/Register');
                  }}
                >
                  Daftar di sini
                </span>
              </span>
            </div>
          </div>
          </form>
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
