import React from "react";
import { useNavigate } from "react-router-dom";

// Images
import BrandLogo from "../../../assets/img/brain.webp";

export const AdminPojok = () => {
  const navigate = useNavigate()

  return (
    <div className="flex">
      <div className="fixed hidden h-screen w-[15%] items-start justify-center bg-primary lg:flex">
        <div className="flex flex-col py-4 items-center justify-center">
          <div className="flex items-center justify-center gap-4">
            <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
            <span className="text-center font-sans text-3xl text-white">
              Bingwa
            </span>
          </div>
          <div className="mr-auto text-start">
            <button className="pt-[5rem] pb-[1rem] text-xl font-sans text-white"
            onClick={()=>{navigate("/admin/dashboard")}}>
              Dashboard
            </button>
          </div>
          <div className="mr-auto text-start">
            <button className="py-4 text-xl font-sans text-white"
            onClick={()=>{navigate("/admin/kelola-kelas")}}>
              Kelola Kelas
            </button>
          </div>
          <div className="mr-auto text-start">
            <button className="py-4 text-xl font-sans text-white"
            onClick={()=>{navigate("/admin/login")}}>
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
