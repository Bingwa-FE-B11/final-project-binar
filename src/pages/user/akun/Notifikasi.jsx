import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarNotif } from "../../../assets/components/navbar/NavbarNotif";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

export const Notifikasi = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[2rem] px-9 lg:px-80 md:px-20 py-10 bg-secondary">
        <div className="flex py-8 items-center gap-2 text-primary text-lg font-bold relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-8 lg:-inset-x-16 md:-inset-x-12"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
        </div>

        {/* Notifikasi */}
        <div className="border-2 border-primary rounded-xl">
          <div className="py-4 text-center text-xl font-semibold text-white bg-primary rounded-t-lg">
            Notifikasi
          </div>

          {/* Isi Notifikasi */}
          <div className="h-fit">
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col space-y-2">
                <div className="flex text-primary text-lg font-semibold gap-4">
                  <IoNotificationsCircleSharp size={30} />
                  Promosi
                </div>
                <div className="flex font-semibold px-11">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </div>
                <div className="flex font-thin px-11">
                  Syarat dan Ketentuan berlaku!
                </div>
              </div>

              {/* Tanggal */}
              <div className="flex font-thin gap-2">
                2 Maret, 12:00
                <FaCircle size={25} className="text-center py-1.5 text-green" />
              </div>
            </div>

            {/* Isi Notifikasi */}
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col space-y-2">
                <div className="flex text-primary text-lg font-semibold gap-4">
                  <IoNotificationsCircleSharp size={30} />
                  Notifikasi
                </div>
                <div className="flex font-semibold px-11">
                  Password berhasil diubah
                </div>
              </div>

              {/* Tanggal */}
              <div className="flex font-thin gap-2">
                1 Maret, 10:00
                <FaCircle
                  size={25}
                  className="text-center py-1.5 text-red-500"
                />
              </div>
            </div>

            {/* Isi Notifikasi */}
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col space-y-2">
                <div className="flex text-primary text-lg font-semibold gap-4">
                  <IoNotificationsCircleSharp size={30} />
                  Promosi
                </div>
                <div className="flex font-semibold px-11">
                  Dapatkan Potongan 50% selama Bulan Maret!
                </div>
                <div className="flex font-thin px-11">
                  Syarat dan Ketentuan berlaku!
                </div>
              </div>

              {/* Tanggal */}
              <div className="flex font-thin gap-2">
                1 Maret, 09:00
                <FaCircle size={25} className="text-center py-1.5 text-green" />
              </div>
            </div>

            {/* Isi Notifikasi */}
            <div className="flex justify-evenly py-6">
              <div className="flex flex-col space-y-2">
                <div className="flex text-primary text-lg font-semibold gap-4">
                  <IoNotificationsCircleSharp size={30} />
                  Notifikasi
                </div>
                <div className="flex font-semibold px-11">
                  Password berhasil diubah
                </div>
              </div>

              {/* Tanggal */}
              <div className="flex font-thin gap-2">
                1 Maret, 10:00
                <FaCircle
                  size={25}
                  className="text-center py-1.5 text-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavbarNotif style={{ zIndex: 1 }}/>
    </>
  );
};
