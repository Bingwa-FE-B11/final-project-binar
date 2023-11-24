import React, { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import BrandLogo from '../img/brain.webp';

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
    <div className="flex bg-primary fixed top-0 justify-between items-center w-screen px-28 py-4 gap-20">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div
            className="text-white text-4xl font-bold font-sans gap-4"
          >
            Bingwa
          </div>
        </div>
  
        <div className="relative">
          <input
            type="text"
            placeholder="Cari kursus terbaik..."
            className="w-[30rem] h-[3rem] px-3 py-2 rounded-xl bg-white cursor-pointer"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt size={30} className="absolute text-white bg-primary rounded inset-y-2 right-4 cursor-pointer p-1"/>
        </div>
      </div>

      <div className="flex text-white gap-2 cursor-pointer font-bold" onClick={()=>{navigate("/Login")}}>
        <CgLogIn size={30} />
        <div className="text-xl">Masuk</div>
      </div>
    </div>
  );
};