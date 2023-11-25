import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline, IoIosList } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
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
    <div className="fixed top-0 flex items-center justify-between w-screen gap-20 py-4 bg-primary px-28">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div className="gap-4 font-sans text-4xl font-bold text-white">
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
          <BiSearchAlt
            size={30}
            className="absolute p-1 text-white rounded cursor-pointer bg-primary inset-y-2 right-4"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 gap-6 text-white cursor-pointer">
        <div className="flex space-x-4">
          <IoIosList size={30} />
          <IoIosNotificationsOutline size={30} />
        </div>
        <div className="flex gap-2 px-6 py-1 font-bold bg-blue-400 rounded-xl">
          <LuUser size={28} />
          <div className="text-lg">Akun</div>
        </div>
      </div>
    </div>
  );
};
