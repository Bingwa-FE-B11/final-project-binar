import React from "react";

export const SidebarKelas = () => {
  return (
    <>
      <div className="hidden w-[30%] flex-col rounded-xl bg-white md:flex lg:flex">
        <div className="flex px-4 py-4 text-xl font-bold">Filter</div>
        <div className="flex flex-col space-y-3 font-medium">
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Paling Baru
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Paling Populer
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Promo
          </div>
        </div>

        {/* Kategori */}
        <div className="flex px-4 py-3 text-xl font-bold">Kategori</div>
        <div className="flex flex-col space-y-3 font-medium">
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            UI-UX Design
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Product Management
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Web Development
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Android Development
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            IOS Development
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Data Science
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Business Intelligence
          </div>
        </div>

        {/* Level Kesulitan */}
        <div className="flex px-4 py-3 text-xl font-bold">Level Kesulitan</div>
        <div className="flex flex-col space-y-3 font-medium">
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Semua Level
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Beginner Level
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Intermediate Level
          </div>
          <div className="flex items-center px-6">
            <input
              type="checkbox"
              className="mr-2 h-[20px] w-[20px] cursor-pointer"
            />
            Advanced Level
          </div>
        </div>

        {/* Hapus Filter */}
        <button className="py-10 font-medium text-red-600">Hapus Filter</button>
      </div>
    </>
  );
};
