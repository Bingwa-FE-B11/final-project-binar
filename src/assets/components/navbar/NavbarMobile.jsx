import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogBody } from "@material-tailwind/react";

// Icons
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { LuPenLine } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { logoutUserAction } from "../../../redux/action/auth/logoutUserAction";
import { useDispatch } from "react-redux";

export const NavbarMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <>
      <div className="fixed bottom-0 w-full shadow-2xl z-50">
        <div className="flex h-full items-center justify-between bg-white px-5 py-2">
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/");
            }}
          >
            <IoHomeOutline size={25} color="gray" />
            <span className="text-sm text-slate-500">Home</span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/notifikasi");
            }}
          >
            <IoNotificationsOutline size={25} color="gray" />
            <span className="text-sm text-slate-500">Notifikasi</span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/kelas-saya");
            }}
          >
            <FaRegCirclePlay size={25} color="gray" />
            <span className="text-sm text-slate-500">Kelas</span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/all-kelas");
            }}
          >
            <CiCircleList size={25} color="gray" />
            <span className="text-sm text-slate-500">Kursus</span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={handleOpen}
          >
            <FaRegUser size={25} color="gray" />
            <span className="text-sm text-slate-500">Akun</span>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <div
            className="flex cursor-pointer items-center gap-3 border-b-2 border-slate-300 py-4 hover:text-primary"
            onClick={() => {
              navigate("/akun-profile");
            }}
          >
            <div className="text-primary">
              <LuPenLine size={25} />
            </div>
            <div className="text-md font-semibold">Profil Saya</div>
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 border-b-2 border-slate-300 py-4 hover:text-primary"
            onClick={() => {
              navigate("/akun-password");
            }}
          >
            <div className="text-primary">
              <IoSettingsOutline size={25} />
            </div>
            <div className="text-md font-semibold">Ubah Password</div>
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 border-b-2 border-slate-300 py-4 hover:text-primary"
            onClick={() => {
              navigate("/akun-pembayaran");
            }}
          >
            <div className="text-primary">
              <MdOutlineShoppingCart size={25} />
            </div>
            <div className="text-md font-semibold">Riwayat Pembayaran</div>
          </div>

          <div
            className="flex cursor-pointer items-center gap-3 border-b-2 border-slate-300 py-4 hover:text-primary"
            onClick={handleLogout}
          >
            <div className="text-primary">
              <LuLogOut size={25} />
            </div>
            <div className="text-md font-semibold">Keluar</div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};
