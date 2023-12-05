import React from 'react';

// Components
import { NavbarKelas } from '../../../assets/components/navbar/NavbarKelas';

// Icons
import { GoArrowLeft } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { RiShieldStarLine } from 'react-icons/ri';
import { LiaBookSolid } from 'react-icons/lia';
import { IoTime } from 'react-icons/io5';
import { HiChatAlt2 } from 'react-icons/hi';
import { FaCirclePlay } from 'react-icons/fa6';
import { TbProgressCheck } from 'react-icons/tb';

export const DetailKelas = () => {
  return (
    <>
      <NavbarKelas />

      {/* Parent Container */}
      <div className="z-20 flex min-h-screen px-20">
        {/* Left Container */}
        <div className="flex flex-col w-2/3 gap-4 pr-16 mt-20">
          {/* Button Back */}
          <div className="flex items-center w-full gap-2 pt-8 pb-5">
            <div>
              <GoArrowLeft />
            </div>
            <div className="font-semibold">Kelas Lainnya</div>
          </div>

          {/* Container Desc Kelas */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="text-xl font-bold text-primary">UI/UX DESIGN</div>
              <div className="flex items-center gap-1">
                <div className="text-yellow-500">
                  <FaStar />
                </div>
                <div className="text-lg font-bold">5.0</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold">Intro to Basic of User Interaction Design</div>
              <div className="text-lg">by Simon Doe</div>
            </div>
            <div className="flex gap-10">
              <div className="flex items-center gap-1">
                <RiShieldStarLine size={20} color="#22c55e" />
                <div className="text-sm font-semibold text-primary">Beginner Level</div>
              </div>
              <div className="flex items-center gap-1">
                <LiaBookSolid size={20} color="#22c55e" />
                <div className="text-sm font-semibold">5 Modul</div>
              </div>
              <div className="flex items-center gap-1">
                <IoTime size={20} color="#22c55e" />
                <div className="text-sm font-semibold">45 Menit</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-6 py-2 text-white cursor-pointer w-fit bg-green rounded-xl">
            <div className="font-semibold">Join Grup Telegram</div>
            <div>
              <HiChatAlt2 size={20} />
            </div>
          </div>

          {/* Section Detail Kelas */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center bg-slate-300 rounded-2xl h-[20rem] my-10">
              <div className="text-primary">
                <FaCirclePlay size={60} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Tentang Kelas */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Tentang Kelas</h1>
                <p className="text-slate-600">
                  Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang
                  dapat digunakan sebagai panduan utama yang memunginkan designer serta developer
                  memiliki lebih banyak kontrol atas berbagai platform. Dengan hadirnya design
                  system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user
                  experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam
                  menghemat waktu dan biaya ketika mengembangkan suatu produk.
                </p>
                <p className="text-slate-600">
                  Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang
                  dapat digunakan sebagai panduan utama yang memunginkan designer serta developer
                  memiliki lebih banyak kontrol atas berbagai platform. Dengan hadirnya design
                  system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user
                  experience menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam
                  menghemat waktu dan biaya ketika mengembangkan suatu produk.
                </p>
              </div>

              {/* Kelas ini ditujukan untuk */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Kelas Ini Ditujukan Untuk</h1>
                <ol className="pl-4 list-decimal">
                  <li>Anda yang ingin memahami tentang Design System</li>
                  <li>Anda yang ingin memahami tentang Design System</li>
                  <li>Anda yang ingin memahami tentang Design System</li>
                  <li>Anda yang ingin memahami tentang Design System</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div className="flex flex-col w-1/3 mt-20">
          {/* Sidebar */}
          <div className="flex flex-col gap-6 p-6 mt-8 shadow-lg rounded-2xl">
            {/* Materi Belajar */}
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Materi Belajar</h1>
              <div className="flex items-center justify-between gap-2 w-fit rounded-3xl">
                <TbProgressCheck size={25} color="#22c55e" />
                <div className="px-3 py-1 font-bold text-white rounded-3xl bg-primary">
                  50% Completed
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">Chapter 1 - Pendahuluan</h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">Chapter 1 - Pendahuluan</h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex items-center w-full gap-2">
                  <p className="flex items-center justify-center w-10 h-10 font-bold rounded-full bg-secondary">
                    1
                  </p>
                  <p className="font-semibold">Tujuan Mengikuti Kelas Design System</p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
