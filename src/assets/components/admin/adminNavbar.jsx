import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiSearchAlt } from "react-icons/bi";


export const AdminNavbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      // navigate(`/Search?query=${search}`);
    }
  };

  return (
    <div className="fixed top-0 flex items-center justify-between  py-2 bg-slate-300 lg:px-20 px-2 gap-2 ml-8/12 w-[80%] right-0">
      <div className="flex gap-10 justify-between w-full">
        <div className="lg:flex gap-2 hidden">
          <div className="gap-4 font-sans text-3xl font-bold text-primary mt-1">
            Hi, Admin!
          </div>
        </div>

        <div className="relative">
          <div className="input-container">
            <input
              type="text"
              placeholder="Cari"
              className="w-[13rem] lg:w-[20rem] h-[3rem] px-2 py-1 rounded-xl bg-white cursor-pointer"
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
      </div>
    </div>
  );
};
