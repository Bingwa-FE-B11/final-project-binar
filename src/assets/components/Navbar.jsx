import React, { useState } from "react";
import { CgLogIn } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import BrandLogo from '../img/brain.webp';

export const Navbar = () => {
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
    <div className="bg-[rgba(97,72,255,1)] fixed top-0 flex justify-stretch items-center w-screen px-28 py-5 gap-20">
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
          className="w-[35rem] h-[3.5rem] px-3 py-2 rounded-xl bg-white cursor-pointer"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        <BiSearchAlt size={30} className="absolute text-white bg-[rgba(97,72,255,1)] rounded inset-y-3 right-4 cursor-pointer p-1"/>
      </div>

      <div className="flex text-white gap-2 cursor-pointer pl-80" onClick={()=>{navigate("/Login")}}>
        <CgLogIn size={30} className="" />
        <div className="text-xl">Masuk</div>
      </div>
    </div>
  );
};