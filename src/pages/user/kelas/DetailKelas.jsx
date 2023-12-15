import React, { useState } from "react";

// Components
import { NavbarKelas } from "../../../assets/components/navbar/NavbarKelas";
import { CardKursus } from "../../../assets/components/cards/CardKursus";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { LiaBookSolid } from "react-icons/lia";
import { IoTime } from "react-icons/io5";
import { HiChatAlt2 } from "react-icons/hi";
import { FaCirclePlay } from "react-icons/fa6";
import { TbProgressCheck } from "react-icons/tb";
import { BiSolidLock } from "react-icons/bi";
import { FaArrowCircleRight } from "react-icons/fa";

// Material Tailwind Components
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export const DetailKelas = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(!dialogOpen);

  return (
    <>
      <NavbarKelas />

      {/* Parent Container */}
      <div className="z-20 flex min-h-screen px-0 lg:px-20 md:px-4 py-6">
        {/* Left Container */}
        <div className="mt-16 flex w-full lg:w-2/3 md:w-2/3 flex-col gap-4 px-8">
          {/* Button Back */}
          <div className="flex w-full items-center gap-2 py-4">
            <div>
              <GoArrowLeft size={20}/>
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
              <div className="text-xl font-bold">
                Intro to Basic of User Interaction Design
              </div>
              <div className="text-lg">by Simon Doe</div>
            </div>
            <div className="flex gap-4 lg:gap-10 md:gap-10">
              <div className="flex items-center gap-1">
                <RiShieldStarLine size={20} color="#22c55e" />
                <div className="text-sm font-semibold text-primary">
                  Beginner Level
                </div>
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
          <div className="flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-green px-6 py-2 text-white">
            <div className="font-semibold">Join Grup Telegram</div>
            <div>
              <HiChatAlt2 size={20} />
            </div>
          </div>

          {/* Section Detail Kelas */}
          <div className="flex flex-col">
            <div className="my-4 flex h-[20rem] items-center justify-center rounded-2xl bg-slate-300">
              <div className="cursor-pointer text-primary">
                <FaCirclePlay size={60} onClick={handleDialogOpen} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Tentang Kelas */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Tentang Kelas</h1>
                <p className="text-slate-600">
                  Design system adalah kumpulan komponen design, code, ataupun
                  dokumentasi yang dapat digunakan sebagai panduan utama yang
                  memunginkan designer serta developer memiliki lebih banyak
                  kontrol atas berbagai platform. Dengan hadirnya design system,
                  dapat menjaga konsistensi tampilan user interface dan
                  meningkatkan user experience menjadi lebih baik. Disisi
                  bisnis, design system sangat berguna dalam menghemat waktu dan
                  biaya ketika mengembangkan suatu produk.
                </p>
                <p className="text-slate-600">
                  Design system adalah kumpulan komponen design, code, ataupun
                  dokumentasi yang dapat digunakan sebagai panduan utama yang
                  memunginkan designer serta developer memiliki lebih banyak
                  kontrol atas berbagai platform. Dengan hadirnya design system,
                  dapat menjaga konsistensi tampilan user interface dan
                  meningkatkan user experience menjadi lebih baik. Disisi
                  bisnis, design system sangat berguna dalam menghemat waktu dan
                  biaya ketika mengembangkan suatu produk.
                </p>
              </div>

              {/* Kelas ini ditujukan untuk */}
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Kelas Ini Ditujukan Untuk</h1>
                <ol className="list-decimal pl-4">
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
        <div className="mt-20 w-1/3 flex-col hidden lg:flex md:flex">
          {/* Sidebar */}
          <div className="mt-8 flex flex-col gap-6 rounded-2xl p-6 shadow-lg">
            {/* Materi Belajar */}
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Materi Belajar</h1>
              <div className="flex w-fit items-center justify-between gap-2 rounded-3xl">
                <TbProgressCheck size={30} color="#22c55e" className="hidden lg:flex md:hidden"/>
                <div className="rounded-3xl bg-primary px-3 py-1 font-bold text-white">
                  50% Completed
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">
                  Chapter 1 - Pendahuluan
                </h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    1
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-green">
                  <FaCirclePlay size={25} />
                </div>
              </div>
            </div>

            {/* Chapter */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="font-bold text-primary">
                  Chapter 2 - Memulai Design
                </h2>
                <h2 className="font-bold text-blue">60 Menit</h2>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
              {/* Chapter List */}
              <div className="flex items-center justify-between">
                <div className="flex w-full items-center gap-2">
                  <p className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold">
                    2
                  </p>
                  <p className="font-semibold">
                    Tujuan Mengikuti Kelas Design System
                  </p>
                </div>
                <div className="text-slate-300">
                  <BiSolidLock size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} handler={handleDialogOpen} className="py-3">
        <DialogHeader className="flex flex-col">
          <h1 className="font-semibold text-slate-700">
            Selangkah lagi menuju
          </h1>
          <h1 className="font-semibold text-primary">Kelas Premium</h1>
        </DialogHeader>
        <DialogBody className="px-12">
          <CardKursus
            category={"UI/UX DESIGN"}
            rating={"5.0"}
            title={"Intro to Basic of User Interaction Design"}
            author={"Simon Doe"}
            level={"Beginner"}
            modul={5}
            duration={4}
            price={"349.000"}
          />
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <div className="flex w-64 cursor-pointer items-center justify-center gap-3 rounded-full bg-primary py-2 transition-all hover:bg-primary-hover">
            <div className="font-semibold text-white">Beli Sekarang</div>
            <FaArrowCircleRight size={17} className="text-white" />
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
};
