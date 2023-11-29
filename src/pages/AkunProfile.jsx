import React from "react";

// Components
import { NavbarAkun } from "../assets/components/navbar/NavbarAkun";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const AkunProfile = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarAkun />
      <div className="mt-[5rem] bg-secondary h-[10rem] px-80">
        <div className="flex py-8 items-center gap-2 text-primary text-lg font-bold">
          <GoArrowLeft
            size={30}
            className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Akun */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-center text-xl font-semibold text-white bg-primary rounded-t-lg">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="py-4 text-center" >
            Isi Kan Akun Profile Disini
          </div>

        </div>
      </div>
    </>
  );
};
