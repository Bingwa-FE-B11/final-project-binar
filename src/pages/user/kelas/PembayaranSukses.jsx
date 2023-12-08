import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarPembayaran } from "../../../assets/components/navbar/NavbarPembayaran";

// Images
import payment from "../../../assets/img/payment.webp";

export const PembayaranSukses = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarPembayaran />

      <div className="mt-[5rem] shadow-lg h-[8rem] px-80">
        <div className="py-10">
          <div className="py-4 text-center items-center text-xl text-white bg-green rounded-xl">
            <div className="font-semibold">
              Terimakasih atas pembayaran transaksi
            </div>
          </div>
        </div>

        <div className="items-center bg-white mt-[1rem]">
          <div className="font-montserrat font-extrabold text-primary text-5xl text-center">
            Selamat!
          </div>

          <div className="items-center justify-center w-1/5 -z-20 mx-auto mt-[2rem]">
            <img src={payment} className="max-w-full max-h-full" alt="Header" />
          </div>

          <div className="flex flex-col">
            <div className="text-xl text-center font-montserrat font-bold mt-[2rem]">
              Transaksi pembayaran kelas premium berhasil!
            </div>
            <div className="text-xl text-center ">
              E-receipt telah dikirimkan ke email.
            </div>
          </div>

          <div className="py-10 flex flex-col items-center ">
            <div className="font-bold items-center text-center gap-2 px-10 py-2 text-white cursor-pointer w-fit bg-primary rounded-2xl text-lg">
              Mulai Belajar
            </div>

            <div className="font-bold items-center text-center gap-2 px-10 py-2 text-blue cursor-pointer text-lg" 
            onClick={() => {
                navigate("/homepage");
              }}>
              Kembali ke Beranda
            </div>


          </div>
        </div>
      </div>
    </>
  );
};
