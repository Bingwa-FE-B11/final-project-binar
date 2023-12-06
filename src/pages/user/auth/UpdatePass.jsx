import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';

// Redux
import { getUpdatePass } from '../../../redux/action/auth/Password';

// Toast
import toast from 'react-hot-toast';

export const UpdatePass = () => {
  const navigate = useNavigate()
  // const { token } = useParams();
  const dispatch = useDispatch();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setpasswordConfirmation] = useState('');

  const handleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "newPassword") {
        setPassword(e.target.value);
      }
      if (e.target.id === "confirmPassword") {
        setpasswordConfirmation(e.target.value);
      }
    }
  };

const handleSave = async () => {
  const updatepass = await dispatch(getUpdatePass({
    password : password ,
    passwordConfirmation: passwordConfirmation
  }))
  if (updatepass) {
    toast.success("Upadate Password Berhasil");
    setTimeout(() => {
      navigate("/kelas-saya")
    }, 1000);
  }
};

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
                onChange={handleInput}
                placeholder="Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type={showPassword1 ? "text" : "password"}
                value={password}
                id="newPassword"
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
                onChange={handleInput}
                placeholder="Ulangi Password Baru"
                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                type={showPassword2 ? "text" : "password"}
                value={passwordConfirmation}
                id="confirmPassword"
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
              onClick={handleSave}
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
