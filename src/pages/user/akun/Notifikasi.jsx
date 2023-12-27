import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import { NavbarNotif } from "../../../assets/components/navbar/NavbarNotif";

// Redux

// Icons
import { GoArrowLeft } from "react-icons/go";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { getNotificationsAction } from "../../../redux/action/notifications/getNotificationsAction";
import { putNotificationsAction } from "../../../redux/action/notifications/putNotificationsAction";

export const Notifikasi = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeNotif = useSelector((state) => state.notifications.notifications);
  const storeStatus = useSelector((state) => state.notifications.status);

  useEffect(() => {
    dispatch(getNotificationsAction());
    dispatch(putNotificationsAction());
  }, [dispatch]);

  return (
    <>
      <div className="mt-[2rem] h-full bg-secondary px-9 py-10 md:px-20 lg:px-80 ">
        <div className="relative flex items-center gap-2 py-8 text-lg font-semibold text-black">
          <GoArrowLeft
            size={30}
            className="absolute -inset-x-8 cursor-pointer md:-inset-x-12 lg:-inset-x-16"
            onClick={() => {
              navigate("/");
            }}
          />
          Kembali Ke Beranda
          <div className="ml-auto flex cursor-pointer text-base text-primary">
            Sudah Dibaca
          </div>
        </div>

        {/* Notifikasi */}
        <div className="rounded-xl border-2 border-primary">
          <div className="rounded-t-lg bg-primary py-4 text-center text-xl font-semibold text-white">
            Notifikasi
          </div>

          {/* Isi Notifikasi */}
          {storeNotif.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center justify-between px-10 py-6"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex gap-4 text-lg font-semibold text-primary">
                  <IoNotificationsCircleSharp size={30} />
                  {notification.title}
                </div>
                <div className="flex px-11 font-semibold">
                  {notification.message}
                </div>
              </div>

              {/* Tanggal */}
              <div className="flex gap-2 font-thin">
                {notification.createdAt}
                <FaCircle
                  size={25}
                  className={`py-1.5 text-center ${
                    notification.isRead ? "text-green" : "text-red-500"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavbarNotif style={{ zIndex: 1 }} />
    </>
  );
};
