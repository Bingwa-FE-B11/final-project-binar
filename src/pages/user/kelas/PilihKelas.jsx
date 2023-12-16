import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";
import { NavbarHome } from "../../../assets/components/navbar/NavbarHome";

export const PilihKelas = () => {
  const navigate = useNavigate();
  const storeAuthUser = useSelector((state) => state.authLogin);

  return (
    <>
      {storeAuthUser.token === null ? <NavbarHome /> : <NavbarKelas />}
      <div className="flex h-fit flex-col justify-between bg-secondary md:h-screen lg:h-fit">
        <div className="flex flex-col justify-center px-2 pt-16 md:px-4 md:pt-20 lg:px-24 lg:pt-28">
          {/* Search */}
          <div className="flex items-center justify-between">
            <div className="px-4 py-6 text-3xl font-bold">Topik Kelas</div>
            <div className="relative flex items-center">
              <input
                type="text"
                className="cursor-pointer rounded-3xl border-2 border-primary px-1 py-2 md:px-4 lg:px-4"
                placeholder="Cari Kelas..."
              />
              <BiSearchAlt
                size={25}
                className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
              />
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-start justify-center py-4 md:justify-between lg:justify-between">
            <div className="hidden w-[30%] flex-col rounded-xl bg-white md:flex lg:flex">
              {/* Filter */}
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
                  UI/UX Design
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
              <div className="flex px-4 py-3 text-xl font-bold">
                Level Kesulitan
              </div>
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
              <button className="py-10 font-medium text-red-600">
                Hapus Filter
              </button>
            </div>

            {/* Button */}
            <div className="flex w-[65%] flex-wrap items-center justify-between font-semibold">
              <div className="flex w-full gap-4 text-center">
                <div
                  className="w-[20%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white"
                  onClick={() => {
                    navigate("/all-kelas");
                  }}
                >
                  <button>All</button>
                </div>
                <div
                  className="w-[40%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[50%] lg:w-[60%]"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div
                  className="w-[30%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white md:w-[40%] lg:w-[30%]"
                  onClick={() => {
                    navigate("/pilih-gratis");
                  }}
                >
                  <button>Kelas Gratis</button>
                </div>
              </div>

              <div className="py-4">
                Menampilkan
                <span className="font-bold text-primary">"Advanced Level"</span>
              </div>
              {/* Main Content */}
              <div className="grid w-full grid-cols-2 gap-6 py-2 md:grid-cols-1 lg:grid-cols-2">
                {/* Card Item */}
                <CardGlobal
                  category={"UAI UEX DISAIN"}
                  rating={4.5}
                  title={"Mari Belajar UIUX"}
                  author={"Paijo"}
                  level={"Basic"}
                  modul={10}
                  duration={120}
                />
              </div>
            </div>
          </div>
        </div>
        <NavbarKelas style={{ zIndex: 1 }} />
      </div>
    </>
  );
};
