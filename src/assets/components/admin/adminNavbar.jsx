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
    <div className="flex items-center justify-between py-4 bg-secondary w-full px-14">
      <div className="flex justify-between w-full">
        <div className="lg:flex gap-2 hidden">
          <div className="gap-4 py-2 font-sans text-3xl font-bold text-primary">
            Hi, Admin!
          </div>
        </div>

        <div className="relative cursor-pointer">
            <input
              type="text"
              placeholder="Cari..."
              className="px-2 py-1 rounded-xl cursor-pointer h-full w-72 focus:border-primary focus:outline-none border-[3px] border-white"
              value={search}
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyPress}
            />
            <BiSearchAlt
              size={30}
              className="absolute p-1 text-white rounded cursor-pointer bg-primary inset-y-2.5 right-4"
            />
        </div>
      </div>
    </div>
  );
};
