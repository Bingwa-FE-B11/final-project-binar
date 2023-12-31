import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";

export const NavbarMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const storeAuthUser = useSelector((state) => state.authLogin);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <>
      <div className="fixed bottom-0 z-50 w-full shadow-2xl">
        <div className="flex h-full items-center justify-between bg-white px-5 py-2">
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/");
            }}
          >
            <div
              className={
                location.pathname === "/" ? `text-primary` : `text-slate-500`
              }
            >
              <IoHomeOutline size={25} />
            </div>
            <span
              className={`text-sm
                ${
                  location.pathname === "/"
                    ? `font-semibold text-primary`
                    : `text-slate-500`
                }`}
            >
              Home
            </span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/notifikasi");
            }}
          >
            <div
              className={
                location.pathname === "/notifikasi"
                  ? `text-primary`
                  : `text-slate-500`
              }
            >
              <IoNotificationsOutline size={25} />
            </div>
            <span
              className={`text-sm
                ${
                  location.pathname === "/notifikasi"
                    ? `font-semibold text-primary`
                    : `text-slate-500`
                }`}
            >
              Notifikasi
            </span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/kelas-saya");
            }}
          >
            <div
              className={
                location.pathname === "/kelas-saya"
                  ? `text-primary`
                  : `text-slate-500`
              }
            >
              <FaRegCirclePlay size={25} />
            </div>
            <span
              className={`text-sm
                ${
                  location.pathname === "/kelas-saya"
                    ? `font-semibold text-primary`
                    : `text-slate-500`
                }`}
            >
              Kelas
            </span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2"
            onClick={() => {
              navigate("/all-kelas");
            }}
          >
            <div
              className={
                location.pathname === "/all-kelas" ||
                location.pathname === "/pilih-gratis" ||
                location.pathname === "/pilih-premium"
                  ? `text-primary`
                  : `text-slate-500`
              }
            >
              <CiCircleList size={25} />
            </div>
            <span
              className={`text-sm
                ${
                  location.pathname === "/all-kelas" ||
                  location.pathname === "/pilih-gratis" ||
                  location.pathname === "/pilih-premium"
                    ? `font-semibold text-primary`
                    : `text-slate-500`
                }`}
            >
              Kursus
            </span>
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

      {/* Dialog Navbar Mobile */}
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          {storeAuthUser.token ? (
            <>
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
                className="flex cursor-pointer items-center gap-3 py-4 hover:text-primary"
                onClick={handleLogout}
              >
                <div className="text-primary">
                  <LuLogOut size={25} />
                </div>
                <div className="text-md font-semibold">Keluar</div>
              </div>
            </>
          ) : (
            <div
              className="flex cursor-pointer items-center gap-3 py-4 hover:text-primary"
              onClick={() => {
                navigate("/login");
              }}
            >
              <div className="text-primary">
                <LuLogOut size={25} />
              </div>
              <div className="text-md font-semibold">Masuk</div>
            </div>
          )}
        </DialogBody>
      </Dialog>
    </>
  );
};
