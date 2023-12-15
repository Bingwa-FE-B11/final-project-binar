import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Images
import EyePassword from '../../../assets/img/fi_eye.webp';
import BrandLogo from '../../../assets/img/brain.webp';
export const AdminLogin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex'>
            <div className="lg:flex items-center justify-center w-2/5 h-screen bg-primary hidden">
                <div className="flex items-center justify-center gap-6">
                    <img src={BrandLogo} alt="Brand Logo" className="w-[15%]" />
                    <span className="font-sans text-6xl text-center text-white">Bingwa</span>
                </div>
            </div>
            <div className="flex items-center justify-center h-screen">
                <div className="w-full rounded-lg lg:w-2/6 md:w-3/6 text-center mx-4">
                    <div className="flex flex-col lg:w-[30rem] md:w-[33rem] mx-auto w-[22rem]">
                        <span className="pb-10 text-4xl font-bold text-primary">Login</span>

                        {/* ID Admin */}
                        <div className="flex flex-col gap-2 ">
                            <span className="text-lg text-left">ID Admin</span>
                            <input
                                placeholder="ID Admin"
                                className="px-4 py-3 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2 pt-8">
                            <div className="flex justify-between">
                                <span className="text-lg text-left">Password</span>
                                <span className="text-lg font-semibold cursor-pointer text-primary">
                                    Lupa Kata Sandi
                                </span>
                            </div>
                            <div className="relative flex flex-col">
                                <input
                                    placeholder="Masukkan Password"
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

                        {/* Button Masuk */}
                        <div className="flex flex-col py-4">
                            <button
                                type="button"
                                className="w-full py-3 mt-2 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl"
                            >
                                Masuk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
