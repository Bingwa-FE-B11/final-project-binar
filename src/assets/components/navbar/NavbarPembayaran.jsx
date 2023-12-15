import React, { useState } from "react";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Images
import BrandLogo from "../../img/brain.webp";
import { useNavigate } from "react-router-dom";

export const NavbarPembayaran = () => {
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
    <div className="fixed top-0 z-50 flex w-screen items-center justify-between bg-primary px-6 py-4 lg:px-28">
      <div className="flex gap-10">
        <div
          className="hidden cursor-pointer items-center justify-center gap-2  lg:flex"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={BrandLogo} alt="Brand Logo" className="w-[2.5rem]" />
          <div className="gap-4 text-3xl font-semibold text-white">Bingwa</div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Cari kursus terbaik..."
            className="h-[3rem] w-[15rem] cursor-pointer rounded-xl bg-white px-3 py-2 lg:w-[30rem]"
            value={search}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
          />
          <BiSearchAlt
            size={30}
            className="absolute inset-y-2 right-4 cursor-pointer rounded bg-primary p-1 text-white"
          />
        </div>
      </div>
    </div>
  );
};
