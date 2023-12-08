import React from "react";

import { AdminNavbar } from "../../assets/components/admin/adminNavbar";
import { AdminPojok } from "../../assets/components/admin/AdminPojok";

import { LuUsers2 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div>
        <AdminPojok />
        <div className="fixed top-11 flex justify-center py-11 lg:px-20 px-2 gap-4 w-[80%] right-0">
          <div className="flex-1 max-w-[300px] mt-4 p-6 bg-sky-400 rounded-xl flex items-center">
            <div className="mr-2 text-3xl font-semibold text-primary rounded-3xl bg-white p-2">
              <LuUsers2 />
            </div>
            <div className="text-white">
              <h1>450</h1>
              <h1>Active Users</h1>
            </div>
          </div>
          <div className="flex-1 max-w-[300px] mt-4 p-6 bg-green rounded-xl flex items-center">
            <div className="mr-2 text-3xl font-semibold text-primary rounded-3xl bg-white p-2">
              <LuUsers2 />
            </div>
            <div className="text-white">
              <h1>25</h1>
              <h1>Active Class</h1>
            </div>
          </div>
          <div className="flex-1 max-w-[300px] mt-4 p-6 bg-primary rounded-xl flex items-center">
            <div className="mr-2 text-3xl font-semibold text-primary rounded-3xl bg-white p-2">
              <LuUsers2 />
            </div>
            <div className="text-white">
              <h1>20</h1>
              <h1>Premium Class</h1>
            </div>
          </div>
        </div>
        <div className="fixed top-11 flex justify-between py-11 lg:px-20 px-2 gap-4 w-[80%] right-0">
          <div className="flex mt-11 p-11 rounded-xl items-center w-full justify-between mr-11">
            <div className="px-11 py-11 mt-11 text-xl font-bold">
              Status Pembayaran
            </div>
            <div className="flex-1 max-w-[100px] mt-11 p-2 rounded-3xl flex items-center bg-slate-300 text-xl font-bold">
              <div className="flex items-center">
                <CiFilter className="mr-2 text-primary" />
                <button className="text-primary"> Filter </button>
                <div className="ml-6 text-primary">
                  <FaSearch />
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-slate-300 right-36 mt-24 w-[61%]">
                <div className="flex gap-4 text-sm font-bold text-black justify-between">
                  <div className="mr-16">ID</div>
                  <div className="mr-16">Kategori</div>
                  <div className="mr-16">Kelas Premium</div>
                  <div className="mr-16">Status</div>
                  <div className="mr-16">Metode Pembayaran</div>
                  <div>Tanggal Pembayaran</div>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-40 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-7">Johndoe</div>
                  <div className="mr-9">UI/UX Design</div>
                  <div className="mr-20">Belajar Web</div>
                  <div className="mr-16 text-green">SUDAH BAYAR</div>
                  <div className="mr-24">Credit Card</div>
                  <div className="mr-8">21 Sep, 2023 at 2.00 AM</div>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-56 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-7">Johndoe</div>
                  <div className="mr-9">UI/UX Design</div>
                  <div className="mr-20">Belajar Web</div>
                  <div className="mr-16 text-red-600">BELUM BAYAR</div>
                  <div className="mr-24">Credit Card</div>
                  <div className="mr-8">21 Sep, 2023 at 2.00 AM</div>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-72 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-7">Johndoe</div>
                  <div className="mr-9">UI/UX Design</div>
                  <div className="mr-20">Belajar Web</div>
                  <div className="mr-16 text-green">SUDAH BAYAR</div>
                  <div className="mr-24">Credit Card</div>
                  <div className="mr-8">21 Sep, 2023 at 2.00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
