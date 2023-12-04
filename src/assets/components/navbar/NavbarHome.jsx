import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { CgLogIn } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";

// Images
import BrandLogo from '../../img/brain.webp';

export const NavbarHome = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // handle search dengan enter setelah input movie
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      // navigate(`/Search?query=${search}`);
    }
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-screen py-4 bg-primary lg:px-28 px-6">
      <div className="flex gap-10">
        <div className="lg:flex gap-2 hidden">
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div className="gap-4 font-sans text-4xl font-bold text-white">
            Bingwa
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Cari kursus terbaik..."
            className="w-[15rem] lg:w-[30rem] h-[3rem] px-3 py-2 rounded-xl bg-white cursor-pointer"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt size={30} className="absolute p-1 text-white rounded cursor-pointer bg-primary inset-y-2 right-4" />
        </div>
      </div>

      <div className="flex gap-2 font-bold text-white cursor-pointer" onClick={() => { navigate("/Login") }}>
        <CgLogIn size={30} className="lg:flex hidden" />
        <div className="text-xl">Masuk</div>
      </div>
    </div>
  );
};