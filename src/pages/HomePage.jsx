import React from "react";

// Images
import Header from "../assets/img/Header.webp";

// Components
import { NavbarHome } from "../assets/components/navbar/NavbarHome";
import { CardKursus } from "../assets/components/cards/CardKursus";
import { CardKategory } from "../assets/components/cards/CardKategory";

export const HomePage = () => {
  return (
    <>
      <NavbarHome />
      <div className="mt-[5rem] flex flex-col">
        {/* Hero Section */}
        <div className="flex">
          <div className="relative -z-10 w-2/3">
            <img src={Header} alt="Header" className="w-full " />
            <div className="absolute inset-0 bg-gradient-to-l from-primary"></div>
          </div>
          <div className="flex w-1/3 items-center justify-center bg-primary">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-semibold tracking-wide text-white">
                Belajar
              </div>
              <div className="text-3xl font-semibold tracking-wide text-white">
                dari Praktisi Terbaik!
              </div>
              <div className="mt-4 cursor-pointer rounded-lg border-2 bg-white px-3 py-2 text-center text-lg font-bold tracking-wide text-primary transition-all hover:border-white hover:bg-primary hover:text-white">
                IKUTI KELAS
              </div>
            </div>
          </div>
        </div>

        {/* Start Kategori Belajar Section */}
        <div className="flex flex-col gap-5 bg-secondary px-28 py-12">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Kategori Belajar</div>
            <div className="cursor-pointer text-lg font-semibold text-primary">
              Lihat Semua
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <CardKategory category={"UI/UX Design"} />
            <CardKategory category={"UI/UX Design"} />
            <CardKategory category={"UI/UX Design"} />
            <CardKategory category={"Product Management"} />
            <CardKategory category={"Web Development"} />
            <CardKategory category={"Android Development"} />
          </div>
        </div>
        {/* End Kategori Belajar Section */}

        {/* Start Kursus Populer Section */}
        <div className="flex flex-col gap-5 px-28 py-12">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold">Kursus Populer</div>
            <div className="cursor-pointer text-lg font-semibold text-primary">
              Lihat Semua
            </div>
          </div>

          {/* Filter */}
          <div className="flex justify-between">
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              All
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              Data Science
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              UI/UX Design
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              Android Development
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              Web Development
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              IOS Development
            </div>
            <div className="cursor-pointer rounded-xl bg-secondary px-5 py-1 text-base font-semibold transition-all hover:bg-primary hover:text-white">
              Bussiness Intelligence
            </div>
          </div>

          {/* Container Card Kelas */}
          <div className="grid grid-cols-3 gap-5">
            {/* Card Item */}
            <CardKursus
              category={"UI/UX Design"}
              rating={4.7}
              title={"Belajar Web Design dengan Figma"}
              author={"Angela Doe"}
              level={"Intermediate"}
              modul={10}
              duration={120}
              price={"249.000"}
            />

            {/* Card Item */}
            <CardKursus
              category={"UI/UX Design"}
              rating={4.7}
              title={"Belajar Web Design dengan Figma"}
              author={"Angela Doe"}
              level={"Intermediate"}
              modul={10}
              duration={120}
              price={"249.000"}
            />

            {/* Card Item */}
            <CardKursus
              category={"UI/UX Design"}
              rating={4.7}
              title={"Belajar Web Design dengan Figma"}
              author={"Angela Doe"}
              level={"Intermediate"}
              modul={10}
              duration={120}
              price={"249.000"}
            />
          </div>
        </div>
        {/* End Kursus Populer */}
      </div>
    </>
  );
};
