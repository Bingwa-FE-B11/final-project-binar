import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarPembayaran } from "../../../assets/components/navbar/NavbarPembayaran";

// Images
import payment from "../../../assets/img/payment.webp";
import onboarding from "../../../assets/img/onboarding.webp";

// Material Tailwind Components
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export const PembayaranSukses = () => {
  const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => setDialogOpen(!dialogOpen);
  return (
    <>
      <NavbarPembayaran />

      <div className="mt-[5rem] h-[8rem] px-80 shadow-lg">
        <div className="py-10">
          <div className="items-center rounded-xl bg-green py-4 text-center text-xl text-white">
            <div className="font-semibold">
              Terimakasih atas pembayaran transaksi
            </div>
          </div>
        </div>

        <div className="mt-[1rem] items-center bg-white">
          <div className="font-montserrat text-center text-5xl font-extrabold text-primary">
            Selamat!
          </div>

          <div className="-z-20 mx-auto mt-[2rem] w-1/5 items-center justify-center">
            <img src={payment} className="max-h-full max-w-full" alt="Header" />
          </div>

          <div className="flex flex-col">
            <div className="font-montserrat mt-[2rem] text-center text-xl font-bold">
              Transaksi pembayaran kelas premium berhasil!
            </div>
            <div className="text-center text-xl ">
              E-receipt telah dikirimkan ke email.
            </div>
          </div>

          <div className="flex flex-col items-center py-10 ">
            <div
              className="w-fit cursor-pointer items-center gap-2 rounded-2xl bg-primary px-10 py-2 text-center text-lg font-semibold text-white"
              onClick={handleDialogOpen}
            >
              Mulai Belajar
            </div>

            <div
              className="cursor-pointer items-center gap-2 px-10 py-2 text-center text-lg font-semibold text-blue"
              onClick={() => {
                navigate("/homepage");
              }}
            >
              Kembali ke Beranda
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={dialogOpen} handler={handleDialogOpen} className="py-3">
        <DialogHeader className="flex flex-col">
          <h1 className="font-semibold text-primary text-3xl">Onboarding...</h1>
        </DialogHeader>
        <DialogBody className="flex flex-col items-center justify-center px-12">
          <img src={onboarding} alt="onboarding" className="w-[50%]"/>
          <h1 className="text-slate-800 font-semibold my-6">Persiapkan hal berikut untuk belajar yang maksimal:</h1>
          <p className="text-slate-600">Mempunyai akun Figma atau Install Adobe XD</p>
          <p className="text-slate-600">Menggunakan internet minimal kecepatan 2Mbps</p>
          <p className="text-slate-600">Belajar di tempat yang nyaman</p>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <div className="flex w-64 cursor-pointer items-center justify-center gap-3 rounded-full bg-primary py-2 transition-all hover:bg-primary-hover">
            <div className="font-semibold text-white">Ikuti Kelas</div>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
};
