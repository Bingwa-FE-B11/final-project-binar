import React, { useEffect } from "react";

// Icons
import { BiSearchAlt } from "react-icons/bi";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardKelasSaya } from "../../../assets/components/cards/CardKelasSaya";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileAction } from "../../../redux/action/auth/getUserProfileAction";

export const KelasSaya = () => {
  const store = useSelector((state) => state.authLogin);

  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(getUserProfileAction());
  };

  useEffect(() => {
    getUser();
  }, [dispatch]);

  return (
    <div className="flex h-full flex-col justify-between bg-secondary">
      <div className="flex flex-col justify-center px-48 pt-28">
        {/* Search */}
        <div className="flex items-center justify-between">
          <div className="px-4 py-6 text-3xl font-bold">Kelas Berjalan</div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="cursor-pointer rounded-3xl border-2 border-primary px-4 py-2"
              placeholder="Cari Kelas..."
            />
            <BiSearchAlt
              size={25}
              className="absolute inset-y-2 right-4 cursor-pointer rounded-lg bg-primary p-1 text-white"
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-start justify-between py-4 pl-4">
          <div className="flex w-[30%] flex-col rounded-xl bg-white">
            {/* Filter */}
            <div className="flex px-4 pb-4 pt-3 text-xl font-bold">Filter</div>
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
            <div className="cursor-pointer rounded-xl bg-white px-16 py-2 hover:bg-primary hover:text-white">
              <button>All</button>
            </div>
            <div className="cursor-pointer rounded-xl bg-white px-28 py-2 hover:bg-primary hover:text-white">
              <button>In Progress</button>
            </div>
            <div className="cursor-pointer rounded-xl bg-white px-20 py-2 hover:bg-primary hover:text-white">
              <button>Selesai</button>
            </div>

            {/* Main Content */}
            <div className="grid w-full grid-cols-2 gap-6 py-4">
              {/* Card Item */}
              <CardKelasSaya
                category={"UAI UEX DISAIN"}
                rating={4.5}
                title={"Mari Belajar UIUX"}
                author={"Paijo"}
                level={"Basic"}
                modul={10}
                duration={120}
                kelas={"Premium"}
                progress={60}
              />

              {/* Card Item */}
              <CardKelasSaya
                category={"Bingwa Nih Bosshht"}
                rating={4.5}
                title={"Mari Belajar UIUX"}
                author={"Paijo"}
                level={"Basic"}
                modul={10}
                duration={120}
                kelas={"Premium"}
                progress={60}
              />

              {/* Card Item */}
              <CardKelasSaya
                category={"UAI UEX DISAIN"}
                rating={4.5}
                title={"Mari Belajar UIUX"}
                author={"Paijo"}
                level={"Basic"}
                modul={10}
                duration={120}
                kelas={"Premium"}
                progress={60}
              />

              {/* Card Item */}
              <CardKelasSaya
                category={"UAI UEX DISAIN"}
                rating={4.5}
                title={"Mari Belajar UIUX"}
                author={"Paijo"}
                level={"Basic"}
                modul={10}
                duration={120}
                kelas={"Premium"}
                progress={60}
              />
            </div>
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};
