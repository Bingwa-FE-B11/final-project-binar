import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarPembayaran } from "../../../assets/components/navbar/NavbarPembayaran";
import { CardPembayaran } from "../../../assets/components/cards/CardPembayaran";

// Icons
import { GoArrowLeft } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { HiArrowCircleRight } from "react-icons/hi";

// Images
import mastercard from "../../../assets/img/mastercard.webp";
import visa from "../../../assets/img/visa.webp";
import amex from "../../../assets/img/amex.webp";
import paypal from "../../../assets/img/paypal.webp";

export const Pembayaran = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarPembayaran />

      {/* First Container */}
      <div className="mt-[5rem] shadow-lg h-[13rem] md:h-[12rem] lg:h-[10rem] px-20 lg:x-80 md:px-60">
        {/* Button Back */}
        <div className="flex pt-5 items-center gap-1 text-lg font-bold relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-10 lg:-inset-x-10 md:-inset-x-14"
            onClick={() => {
              navigate("");
            }}
          />
          Kembali
        </div>

        <div className="py-6">
          <div className="py-4 text-center items-center text-xl text-white bg-red-500 rounded-xl">
            <div className="font-semibold">
              Selesaikan Pembayaran sampai 10 Maret 2023 12:00
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-10 justify-center px-[1rem] lg:px-[3rem] md:px-2 py-10">
        {/* Payment Method */}
        <div className="flex flex-col lg:w-[40%] gap-1">
          <div className="flex flex-col text-center gap-2">
            <div className="py-4 flex items-center text-xl text-white bg-gray-700 rounded-xl">
              <div className="flex items-center w-full justify-between px-4">
                <div className="font-semibold">Bank Transfer</div>
                <div className="">
                  <GoChevronDown />
                </div>
              </div>
            </div>

            <div className="py-4 flex items-center text-xl text-white bg-primary rounded-xl">
              <div className="flex items-center w-full justify-between px-4">
                <div className="font-semibold">Credit Card</div>
                <div className="">
                  <GoChevronUp />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Detail*/}
          <div className="flex flex-col px-4 w-full gap-4 shadow-lg rounded-xl">
            {/* Payment Card Logo*/}
            <div className="flex items-center justify-between w-[50%] py-2 gap-4 mx-auto">
              <div className="flex-1 items-center">
                <img src={mastercard} className="" alt="mastercard" />
              </div>
              <div className="flex-1 items-center">
                <img src={visa} className="" alt="visa" />
              </div>
              <div className="flex-1 items-center">
                <img src={amex} className=" " alt="amex" />
              </div>
              <div className="flex-1 items-center">
                <img src={paypal} className="" alt="paypal" />
              </div>
            </div>

            {/* Detail Card Payment*/}
            <div className="flex flex-col gap-2 ">
              <div className="flex flex-col w-full justify-between px-4">
                <div className="font-bold text-xl">Card Number</div>
                <input
                  placeholder="4480 0000 0000 0000"
                  className="px-4 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                  type="text"
                  id="card"
                />
              </div>
              <div className="flex flex-col w-full justify-between px-4">
                <div className="font-bold text-xl">Card Holder Name</div>
                <input
                  placeholder="John Doe"
                  className="px-4 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                  type="text"
                  id="card"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col w-1/2 justify-between px-4">
                  <div className="font-bold text-xl">CVV</div>
                  <input
                    placeholder="000"
                    className="w-[10rem] px-3 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                    type="text"
                    id="card"
                  />
                </div>

                <div className="flex flex-col w-1/2 justify-between px-4">
                  <div className="font-bold text-xl">Expiry Date</div>
                  <input
                    placeholder="07/24"
                    className="w-[10rem] px-3 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                    type="text"
                    id="card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 py-3 border-2 border-slate-300 rounded-xl focus:outline-none w-full lg:w-[30%] md:w-auto gap-2 shadow-lg">
          <div className="font-bold text-2xl flex flex-col gap-4 items-center">
            Pembayaran Kelas
          </div>

            {/* Main Content */}
            <div className="w-fit px-0 lg:px-0 md:px-44 gap-6">
              {/* Card Item */}
              <CardPembayaran
                category={"UI/UX DESIGN"}
                title={"Intro to Basic of User Interaction Design"}
                author={"Simon Doe"}
              />
            </div>

            {/* Detail Harga */}
            <div className="flex gap-4 lg:gap-6 md:gap-10 py-3 items-center justify-center">
              <div className="flex flex-col">
                <div className="font-bold text-lg lg:text-xl md:text-2xl">Harga</div>
                <div className="font-semibold text-base lg:text-lg md:text-xl">Rp 349,000</div>
              </div>

              <div className="flex flex-col">
                <div className="font-bold text-lg lg:text-xl md:text-2xl">PPN 11%</div>
                <div className="font-semibold text-base lg:text-lg md:text-xl">Rp 38,390</div>
              </div>

              <div className="flex flex-col">
                <div className="font-bold text-lg lg:text-xl md:text-2xl">Total Bayar</div>
                <div className="text-primary font-semibold text-base lg:text-lg md:text-xl">
                  Rp 387,390
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 px-6 py-2 text-white cursor-pointer w-full bg-red-500 rounded-2xl">
              <div className="font-bold text-xl text-center">Bayar dan Ikuti Kelas Selamanya</div>
              <div>
                <HiArrowCircleRight size={40} />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
