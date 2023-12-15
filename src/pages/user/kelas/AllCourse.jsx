import React from 'react'
import { useNavigate } from "react-router-dom";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Component
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";

export const AllCourse = () => {
    const navigate = useNavigate();

    return (
      <div className="flex h-full flex-col justify-between bg-secondary">
        <div className="flex flex-col justify-center px-2 lg:px-24 md:px-4 pt-16 lg:pt-28 md:pt-20">
          {/* Search */}
          <div className="flex items-center justify-between">
            <div className="px-4 py-6 text-3xl font-bold">Topik Kelas</div>
            <div className="relative flex items-center">
              <input
                type="text"
                className="cursor-pointer rounded-3xl border-2 border-primary px-1 lg:px-4 md:px-4 py-2"
                placeholder="Cari Kelas..."
              />
              <BiSearchAlt
                size={25}
                className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
              />
            </div>
          </div>
  
          {/* Filter */}
          <div className="flex items-start justify-center lg:justify-between md:justify-between py-4">
            <div className="w-[30%] flex-col rounded-xl bg-white hidden lg:flex md:flex">
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
                <div className="w-[20%] cursor-pointer rounded-xl bg-primary text-white py-2 hover:bg-white hover:text-black">
                  <button>All</button>
                </div>
                <div
                  className="w-[40%] lg:w-[60%] md:w-[50%] cursor-pointer rounded-xl bg-white py-2 hover:bg-primary hover:text-white"
                  onClick={() => {
                    navigate("/pilih-premium");
                  }}
                >
                  <button>Kelas Premium</button>
                </div>
                <div className="w-[30%] lg:w-[30%] md:w-[40%] cursor-pointer rounded-xl py-2 bg-white hover:bg-primary hover:text-white">
                  <button>Kelas Gratis</button>
                </div>
              </div>
  
              {/* Main Content */}
              <div className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6 py-4">
                {/* Card Item */}
                <CardGlobal
                  category={"UI/UX Design"}
                  rating={5}
                  title={"Into to Basic of User Interaction Design Figma"}
                  author={"By Simon Doe"}
                  level={"Beginner"}
                  modul={5}
                  duration={45}
                  kelas={"Mulai Kelas"}
                />
  
                {/* Card Item */}
                <CardGlobal
                  category={"UI/UX Design"}
                  rating={4.8}
                  title={"Menguasai Figma dengan Modern UI Dashboard Login"}
                  author={"By Simon Doe"}
                  level={"Intermediate"}
                  modul={5}
                  duration={60}
                  kelas={"Mulai Kelas"}
                />
  
                {/* Card Item */}
                <CardGlobal
                  category={"UI/UX Desain"}
                  rating={4.8}
                  title={"Menguasai Figma dengan AutoFlow"}
                  author={"by Simon Doe"}
                  level={"Intermediate"}
                  modul={5}
                  duration={60}
                  kelas={"Mulai Kelas"}
                />
  
                {/* Card Item */}
                <CardGlobal
                  category={"UI/UX Desain"}
                  rating={4.9}
                  title={"Membuat Grid System dengan Figam"}
                  author={"by Simon Doe"}
                  level={"Advance"}
                  modul={10}
                  duration={100}
                  kelas={"Mulai Kelas"}
                />
              </div>
            </div>
          </div>
        </div>
        <NavbarKelas style={{ zIndex: 1 }} />
      </div>
    );
  };
