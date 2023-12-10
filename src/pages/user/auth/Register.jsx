import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';

// Redux
import { RegisterUser } from '../../../redux/action/auth/authRegisterSlice';

// Toast
import { showErrorToast, showSuccessToast } from '../../../helper/ToastHelper';

export const Register = () => {
  const navigate = useNavigate();
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === 'nama') {
        setFullName(e.target.value);
      }
      if (e.target.id === 'email') {
        setEmail(e.target.value);
      }
      if (e.target.id === 'telepon') {
        setPhoneNumber(e.target.value);
      }
      if (e.target.id === 'password') {
        setPassword(e.target.value);
      }
    }
  };

  const handleRegister = async () => {
    const register = await dispatch(
      RegisterUser({
        fullName: FullName,
        email: Email,
        phoneNumber: PhoneNumber,
        password: Password,
      })
    );
    if (register) {
      showSuccessToast('Tautan Verifikasi telah dikirim!');
      setTimeout(() => {
        navigate('/otp');
      }, 2000);
    }
  };

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (FullName.length === 0) {
      return showErrorToast('Nama Lengkap harus di isi');
    }

    // Check if the Email is an Empty string or not.

    if (Email.length === 0) {
      return showErrorToast('Email Harus di isi');
    }

    if (PhoneNumber.length === 0) {
      return showErrorToast('No Hp Harus di isi');
    }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (Password.length < 8) {
      return showErrorToast('Password kurang dari 8 karakter');
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0;
    // variable to count lowercase characters in the password.
    let countLowerCase = 0;
    // variable to count digit characters in the password.
    let countDigit = 0;
    // variable to count special characters in the password.
    let countSpecialCharacters = 0;

    for (let i = 0; i < Password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ];

      if (specialChars.includes(Password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++;
      } else if (!isNaN(Password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++;
      } else {
        if (Password[i] === Password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++;
        }
        if (Password[i] === Password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++;
        }
      }
    }

    if (countLowerCase === 0) {
      // invalid form, 0 lowercase characters
      return showErrorToast('Password harus terdapat lower case');
    }

    if (countUpperCase === 0) {
      // invalid form, 0 upper case characters
      return showErrorToast('Password harus terdapat upper case');
    }

    if (countDigit === 0) {
      // invalid form, 0 digit characters
      return showErrorToast('Password harus terdapat angka');
    }

    if (countSpecialCharacters === 0) {
      // invalid form, 0 special characters characters
      return showErrorToast('Passwsord harus terdapat Special Characters');
    }

    // if all the conditions are valid, this means that the form is valid

    handleRegister();
  }

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
                required
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
                required
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
                required
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
                  type={showPassword ? 'text' : 'password'}
                  value={Password}
                  id="password"
                  required
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
                // onClick={() => {
                //   handleRegister();
                // }}
                onClick={() => {
                  validateForm();
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
