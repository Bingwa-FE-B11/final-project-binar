import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { SidebarAkun } from "../../../assets/components/sidebar/SidebarAkun";
import { NavbarMobile } from "../../../assets/components/navbar/NavbarMobile";
import { CardGlobal } from "../../../assets/components/cards/CardGlobal";
import CardCoursesSkeleton from "../../../assets/components/skeleton/CardCourseSkeleton";

// Icons
import { GoArrowLeft } from "react-icons/go";

export const AkunPembayaran = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const storeHistory = useSelector((state) => state.payment.payment);
  const storeCourses = useSelector((state) => state.dataCourses.courses);
  console.log("storeHistory", storeHistory)

  return (
    <>
      <div className="h-fit bg-secondary px-9 py-20 pt-2 md:h-screen md:px-20 lg:h-fit lg:px-80 lg:pt-[5rem]">
        <div className="relative flex items-center gap-2 py-8 text-lg font-bold text-primary">
          <GoArrowLeft
            size={30}
            className="absolute -inset-x-1 cursor-pointer md:-inset-x-12 lg:-inset-x-16"
            onClick={() => {
              navigate("/akun-profile");
            }}
          />
          <span className="hidden lg:block">Kembali ke Beranda</span>
        </div>

        {/* Akun */}
        <div className="rounded-xl border-2 border-primary">
          <div className="rounded-t-lg bg-primary py-4 text-center text-xl font-semibold text-white">
            Akun
          </div>

          {/* Isi Akun */}
          <div className="flex py-4 text-center">
            <SidebarAkun />

            {/* Riwayat Pembayaran */}
            <div className="flex w-full flex-col items-center md:w-[60%] lg:w-[60%]">
              <div className="py-4 text-center text-2xl font-bold">
                Riwayat Pembayaran
              </div>

              {/* Main Content */}
              <div className="space-y-6 px-4 w-full">
                {/* Card Item */}
                {storeHistory && storeCourses ? (
                  <CardGlobal
                    image={storeCourses?.courseImg}
                    category={storeHistory?.category?.categoryName}
                    title={storeHistory?.courseName}
                    author={storeHistory?.mentor}
                  />
                ) : (
                  <CardCoursesSkeleton />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? <NavbarMobile /> : <NavbarAkun style={{ zIndex: 1 }} />}
    </>
  );
};
