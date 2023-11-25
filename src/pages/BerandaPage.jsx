import React from 'react';
import { NavbarHome } from '../assets/components/NavbarHome';

// Images
import Header from '../assets/img/Header.webp';

// Components
import { CardKursus } from '../assets/components/CardKursus';
import { CardKategory } from '../assets/components/CardKategory';

export const BerandaPage = () => {
  return (
    <>
      <NavbarHome />
      <div className="flex flex-col mt-[5rem]">
        {/* Hero Section */}
        <div className="flex">
          <div className="relative w-2/3 -z-10">
            <img src={Header} alt="Header" className="w-full " />
            <div className="absolute inset-0 bg-gradient-to-l from-primary"></div>
          </div>
          <div className="flex items-center justify-center w-1/3 bg-primary">
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-semibold tracking-wide text-white">Belajar</div>
              <div className="text-3xl font-semibold tracking-wide text-white">
                dari Praktisi Terbaik!
              </div>
              <div className="px-3 py-2 mt-4 text-lg font-bold tracking-wide text-center transition-all bg-white border-2 rounded-lg cursor-pointer text-primary hover:bg-primary hover:text-white hover:border-white">
                IKUTI KELAS
              </div>
            </div>
          </div>
        </div>

        {/* Start Kategori Belajar Section */}
        <div className="flex flex-col gap-5 px-[240px] bg-secondary py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Kategori Belajar</div>
            <div className="text-lg font-bold cursor-pointer text-primary">Lihat Semua</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <CardKategory category={'UI/UX Design'} />
            <CardKategory category={'Product Management'} />
            <CardKategory category={'Web Development'} />
            <CardKategory category={'Android Development'} />
          </div>
        </div>
        {/* End Kategori Belajar Section */}

        {/* Start Kursus Populer Section */}
        <div className="flex flex-col gap-5 px-[240px] py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Kursus Populer</div>
            <div className="text-lg font-bold cursor-pointer text-primary">Lihat Semua</div>
          </div>

          {/* Filter */}
          <div className="flex justify-between">
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              All
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              Data Science
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              UI/UX Design
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              Android Development
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              Web Development
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              IOS Development
            </div>
            <div className="px-5 py-1 text-[14px] font-bold transition-all cursor-pointer rounded-xl bg-secondary hover:bg-primary hover:text-white">
              Bussiness Intelligence
            </div>
          </div>

          {/* Container Card Kelas */}
          <div className="grid grid-cols-2 gap-5">
            {/* Card Item */}
            <CardKursus
              category={'UI/UX Design'}
              rating={4.7}
              title={'Belajar Web Design dengan Figma'}
              author={'Angela Doe'}
              level={'Intermediate'}
              modul={10}
              duration={120}
              price={'249.000'}
            />

            {/* Card Item */}
            <CardKursus
              category={'UI/UX Design'}
              rating={4.7}
              title={'Belajar Web Design dengan Figma'}
              author={'Angela Doe'}
              level={'Intermediate'}
              modul={10}
              duration={120}
              price={'249.000'}
            />
          </div>
        </div>
        {/* End Kursus Populer */}
      </div>
    </>
  );
};
