import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Components
import { NavbarAkun } from "../../../assets/components/navbar/NavbarAkun";
import { CardPremium } from "../../../assets/components/cards/CardPremium";
import { SidebarAkun } from "../../../assets/components/sidebar/SidebarAkun";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { NavbarMobile } from "../../../assets/components/navbar/NavbarMobile";

export const AkunPembayaran = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });
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
              <div className="space-y-6 px-4">
                {/* Card Item */}
                <CardPremium
                  category={"Web Development"}
                  rating={4.5}
                  title={"Belajar ReactJS untuk pemula"}
                  author={"Eren Saputra"}
                  level={"Basic"}
                  modul={10}
                  duration={120}
                  kelas={"Waiting for Payment"} //merah harusnya
                />
                <CardPremium
                  category={"UI/UX Design"}
                  rating={4.7}
                  title={"Belajar Web Design dengan Figma"}
                  author={"Angela Doe"}
                  level={"Intermediate"}
                  modul={10}
                  duration={120}
                  kelas={"paid"} //hijau harusnya
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? <NavbarMobile /> : <NavbarAkun style={{ zIndex: 1 }} />}
    </>
  );
};
