import React from 'react'
import { useNavigate } from 'react-router-dom';

// Icons
import { BiSearchAlt } from 'react-icons/bi';

// Components
import { NavbarKelas } from '../../../assets/components/navbar/NavbarKelas';
import { CardGlobal } from '../../../assets/components/cards/CardGlobal';

export const PilihKelas = () => {
  const navigate = useNavigate() 

  return (
    <div className="flex flex-col justify-between bg-secondary h-fit lg:h-fit md:h-screen">
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
              className="absolute p-1 text-white rounded-lg cursor-pointer bg-primary inset-y-2 right-4"
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
            <div className="flex w-full gap-4 text-center">
              <div className="py-2 bg-white cursor-pointer w-[20%] rounded-xl hover:bg-primary hover:text-white"
              onClick={()=>{navigate("/all-kelas")}}>
                <button>All</button>
              </div>
              <div className="w-[40%] lg:w-[60%] md:w-[50%] py-2 bg-white cursor-pointer rounded-xl hover:bg-primary hover:text-white"
              onClick={()=>{navigate("/pilih-premium")}}>
                <button>Kelas Premium</button>
              </div>
              <div className="w-[30%] lg:w-[30%] md:w-[40%] py-2 bg-white cursor-pointer rounded-xl hover:bg-primary hover:text-white"
              onClick={()=>{navigate("/pilih-gratis")}}>
                <button>Kelas Gratis</button>
              </div>
            </div>
            
            <div className='py-4'>Menampilkan 
            <span className='text-primary font-bold'>"Advanced Level"</span>
            </div>
            {/* Main Content */}
            <div className="grid w-full grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6 py-2">
              {/* Card Item */}
              <CardGlobal
              category={'UAI UEX DISAIN'}
              rating={4.5}
              title={'Mari Belajar UIUX'}
              author={'Paijo'}
              level={'Basic'}
              modul={10}
              duration={120}/>             
            </div>
            
          </div>
        </div>
      </div>
      <NavbarKelas style={{ zIndex: 1 }} />
    </div>
  );
};

