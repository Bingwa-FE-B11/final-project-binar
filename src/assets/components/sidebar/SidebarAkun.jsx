import React from 'react';

// icons
import { LuPenLine } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

export const SidebarAkun = () => {
  return (
    // Sidebar Container
    <div className="flex flex-col px-4 w-[40%]">
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary">
        <div className="text-primary">
          <LuPenLine size={25} />
        </div>
        <div className="font-semibold text-md">Profil Saya</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary">
        <div className="text-primary">
          <IoSettingsOutline size={25} />
        </div>
        <div className="font-semibold text-md">Ubah Password</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary">
        <div className="text-primary">
          <MdOutlineShoppingCart size={25} />
        </div>
        <div className="font-semibold text-md">Riwayat Pembayaran</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary">
        <div className="text-primary">
          <LuLogOut size={25} />
        </div>
        <div className="font-semibold text-md">Keluar</div>
      </div>
    </div>
  );
};
