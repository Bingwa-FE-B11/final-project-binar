import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// icons
import { LuPenLine } from 'react-icons/lu';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

// Redux
import { logoutUserAction } from '../../../redux/action/auth/logoutUserAction';

export const SidebarAkun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    // Sidebar Container
    <div className="flex-col px-4 w-[40%] hidden lg:flex md:flex">
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
      onClick={()=>{navigate("/akun-profile")}}>
        <div className="text-primary">
          <LuPenLine size={25} />
        </div>
        <div className="font-semibold text-md">Profil Saya</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
      onClick={()=>{navigate("/akun-password")}}>
        <div className="text-primary">
          <IoSettingsOutline size={25} />
        </div>
        <div className="font-semibold text-md">Ubah Password</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
      onClick={()=>{navigate("/akun-pembayaran")}}>
        <div className="text-primary">
          <MdOutlineShoppingCart size={25} />
        </div>
        <div className="font-semibold text-md">Riwayat Pembayaran</div>
      </div>
      {/* Sidebar Item */}
      <div className="flex items-center gap-3 py-4 border-b-2 cursor-pointer border-slate-300 hover:text-primary"
      onClick={handleLogout}>
        <div className="text-primary">
          <LuLogOut size={25} />
        </div>
        <div className="font-semibold text-md">Keluar</div>
      </div>
      <div className='py-6 text-gray-400'>Version 1.1.0</div>
    </div>
  );
};
