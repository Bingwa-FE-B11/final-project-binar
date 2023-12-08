import React from 'react'



import { AdminNavbar } from "../../../assets/components/admin/adminNavbar";
import { AdminPojok } from "../../../assets/components/admin/AdminPojok";

import { LuUsers2 } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

export const AdminKelolaKelas = () => {
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
              Kelola Kelas
            </div>
            <div className="flex-1 max-w-[130px] mt-8 p-2 rounded-3xl flex items-center bg-primary text-xl font-bold ml-auto mr-2">
              <div className="flex items-center">
                <CiCirclePlus className="mr-2 text-white" />
                <button className="text-white">Tambah</button>
              </div>
            </div>
            <div className="flex-1 max-w-[100px] mt-8 p-2 rounded-3xl flex items-center bg-slate-300 text-xl font-bold">
              <div className="flex items-center">
                <CiFilter className="mr-2 text-primary" />
                <button className="text-primary"> Filter </button>
                <div className="ml-6 text-primary">
                  <FaSearch />
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-slate-300 right-36 mt-24 w-[61%]">
                <div className="flex gap-4 text-sm font-bold text-black justify-between">
                  <div className="mr-16">Kode Kelas</div>
                  <div className="mr-10">Kategori</div>
                  <div className="mr-12">Nama Kelas</div>
                  <div className="mr-16">Tipe Kelas</div>
                  <div className="mr-16">Level</div>
                  <div className="mr-16">Harga Kelas</div>
                  <div className="mr-12">Aksi</div>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-40 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-20">UIUX123</div>
                  <div className="mr-16">UI/UX</div>
                  <div className="mr-12">Belajar Web</div>
                  <div className="mr-20 text-green">GRATIS</div>
                  <div className="mr-12">Advanced</div>
                  <div className="mr-8">Rp. 15.000</div>
                  <button className="mr-2 bg-primary rounded-xl w-12 text-white">
                    Ubah
                  </button>
                  <button className="mr-3 bg-red-500 rounded-xl w-12 text-white">
                    Hapus
                  </button>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-56 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-20">UIUX123</div>
                  <div className="mr-16">UI/UX</div>
                  <div className="mr-12">Belajar Web</div>
                  <div className="mr-20 text-primary">PREMIUM</div>
                  <div className="mr-12">Beginer</div>
                  <div className="mr-8"> Rp. 15.000 </div>
                  <button className="mr-2 bg-primary rounded-xl w-12 text-white">
                    Ubah
                  </button>
                  <button className="mr-2 bg-red-500 rounded-xl w-12 text-white">
                    Hapus
                  </button>
                </div>
              </div>
              <div className="fixed top-500 flex items-start justify-start bg-white right-36 mt-72 w-[61%]">
                <div className="flex gap-4 text-sm font-normal text-black justify-between">
                  <div className="mr-20">UIUX123</div>
                  <div className="mr-16">UI/UX</div>
                  <div className="mr-12">Belajar Web</div>
                  <div className="mr-20 text-green">GRATIS</div>
                  <div className="mr-8">Intermediate</div>
                  <div className="mr-6">Rp. 15.000</div>
                  <button className="ml-2 bg-primary rounded-xl w-12 text-white">
                    Ubah
                  </button>
                  <button className="mr-7 ml-2 bg-red-500 rounded-xl w-12 text-white">
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
