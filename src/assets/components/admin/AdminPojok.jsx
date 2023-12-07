import React from 'react';
import BrandLogo from '../../../assets/img/brain.webp';

export const AdminPojok = () => {
  return (
    <div className="flex">
      <div className="lg:flex items-start justify-center w-1/5 h-screen bg-primary hidden">
        <div className="flex flex-col items-center justify-center mt-4 ">
          <div className="flex items-center justify-center gap-4">
            <img src={BrandLogo} alt="Brand Logo" className="w-[13%]" />
            <span className="font-sans text-3xl text-center text-white">Bingwa</span>
          </div>
          <div className='text-start mr-auto'>
          <button className=' text-white text-1xl font-sans mt-11 ml-5'> Dashboard </button>
          </div>
                    <div className='text-start mr-auto'>
          <button className=' text-white text-1xl font-sans mt-5 ml-5'> Kelola Kelas </button>
          </div>
          <div className='text-start mr-auto'>
          <button className=' text-white text-1xl font-sans mt-5 ml-5'> Keluar </button>
</div>

          </div>
          </div>
          </div>
  );
};
