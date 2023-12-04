import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline, IoIosList } from "react-icons/io";
import { LuUser } from "react-icons/lu";

// Images
import BrandLogo from "../../img/brain.webp";

export const NavbarAkun = () => {
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
    <div className="fixed top-0 flex items-center justify-between w-screen py-4 bg-primary lg:px-28 px-2 gap-2">
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
            className="w-[13rem] lg:w-[30rem] h-[3rem] px-3 py-2 rounded-xl bg-white cursor-pointer"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt
            size={30}
            className="absolute p-1 text-white rounded cursor-pointer bg-primary inset-y-2 right-4"
          />
        </div>
      </div>

      <div className="flex items-center lg:gap-6 gap-1 text-white cursor-pointer">
        <div className="flex lg:space-x-4 space-x-1">
          <IoIosList size={30} onClick={()=>{navigate("/kelas-saya")}} />
          <IoIosNotificationsOutline size={30} onClick={()=>{navigate("/notifikasi")}} />
        </div>
        <div className="flex lg:gap-2 lg:px-6 px-2 py-1 font-bold bg-blue-400 rounded-xl">
          <LuUser size={28} />
          <div className="text-lg">Akun</div>
        </div>
      </div>
    </div>
  );
};
