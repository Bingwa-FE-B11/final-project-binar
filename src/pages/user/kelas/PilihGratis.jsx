import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import { NavbarKelas } from '../../../assets/components/navbar/NavbarKelas';
import { CardKursus } from '../../../assets/components/cards/CardKursus';
import { CardGlobal } from '../../../assets/components/cards/CardGlobal';

export const PilihGratis = () => {
  return (
 <div className="flex flex-col justify-between h-full bg-secondary">
      <div className="flex flex-col justify-center px-48 pt-28">
        {/* Search */}
        <div className="flex items-center justify-between">
          <div className="px-4 py-6 text-3xl font-bold">Topik Kelas</div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="px-4 py-2 border-2 cursor-pointer border-primary rounded-3xl"
              placeholder="Cari Kelas..."
            />
            <BiSearchAlt
              size={25}
              className="absolute p-1 text-white rounded-lg cursor-pointer bg-primary inset-y-2 right-4"
            />
          </div>
        </div>

        {/* Filter */}
        <div className="flex items-start justify-between py-4 pl-4">
          <div className="flex flex-col bg-white rounded-xl w-[30%]">
            {/* Filter */}
            <div className="flex px-4 pt-3 pb-4 text-xl font-bold">Filter</div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Paling Baru
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Paling Populer
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Promo
              </div>
            </div>

            {/* Kategori */}
            <div className="flex px-4 py-3 text-xl font-bold">Kategori</div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                UI/UX Design
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Web Development
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Android Development
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Data Science
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Business Intelligence
              </div>
            </div>

            {/* Level Kesulitan */}
            <div className="flex px-4 py-3 text-xl font-bold">Level Kesulitan</div>
            <div className="flex flex-col space-y-3 font-medium">
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Semua Level
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Beginner Level
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Intermediate Level
              </div>
              <div className="flex items-center px-6">
                <input type="checkbox" className="w-[20px] h-[20px] mr-2 cursor-pointer" />
                Advanced Level
              </div>
            </div>

            {/* Hapus Filter */}
            <button className="py-10 font-medium text-red-600">Hapus Filter</button>
          </div>

          {/* Button */}
          <div className="flex flex-wrap items-center justify-between font-semibold w-[65%]">
            <div className="px-16 py-2 bg-white cursor-pointer rounded-xl hover:bg-primary hover:text-white">
              <button>All</button>
            </div>
            <div className="py-2 bg-white cursor-pointer px-28 rounded-xl hover:bg-primary hover:text-white">
              <button>Kelas Premium</button>
            </div>
            <div className="px-20 py-2 bg-white cursor-pointer rounded-xl hover:bg-primary hover:text-white">
              <button>Kelas Gratis</button>
            </div>

            {/* Main Content */}
            <div className="grid w-full grid-cols-2 gap-6 py-4">
              {/* Card Item */}
              <CardGlobal
                category={'UI/UX Design'}
                rating={5}
                title={'Into to Basic of User Interaction Design'}
                author={'By Simon Doe'}
                level={'Beginner'}
                modul={5}
                duration={45}
                kelas={'Mulai Kelas'}
              />

              {/* Card Item */}
              <CardGlobal
                category={'UI/UX Design'}
                rating={4.8}
                title={'Menguasai Figma dengan Modern UI Dashboard Login'}
                author={'By Simon Doe'}
                level={'Intermediate'}
                modul={5}
                duration={60}
                kelas={'Mulai Kelas'}
              />

              {/* Card Item */}
              <CardGlobal
                category={'UI/UX Desain'}
                rating={4.8}
                title={'Menguasai Figma dengan AutoFlow'}
                author={'by Simon Doe'}
                level={'Intermediate'}
                modul={5}
                duration={60}
                kelas={'Mulai Kelas'}
              />

              {/* Card Item */}
              <CardGlobal
                category={'UI/UX Desain'}
                rating={4.9}
                title={'Membuat Grid System dengan Figam'}
                author={'by Simon Doe'}
                level={'Advance'}
                modul={10}
                duration={100}
                kelas={'Mulai Kelas'}
              />
            </div>
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};

