import React, { useState } from "react";

// Icons
import { BiSearchAlt } from "react-icons/bi";

export const AdminNavbar = () => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      // navigate(`/Search?query=${search}`);
    }
  };

  return (
    <div className="fixed top-0 flex items-center justify-between py-4 bg-secondary lg:px-20 w-[85%] right-0">
      <div className="flex justify-between w-full bg-green">
        <div className="lg:flex gap-2 hidden">
          <div className="gap-4 py-2 font-sans text-3xl font-bold text-primary">
            Hi, Admin!
          </div>
        </div>

        <div className="relative cursor-pointer">
            <input
              type="text"
              placeholder="Cari"
              className="w-[13rem] lg:w-[20rem] h-[3rem] px-2 py-1 rounded-xl cursor-pointer"
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
  );
};
