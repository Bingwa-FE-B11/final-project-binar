import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { NavbarPembayaran } from "../../../assets/components/navbar/NavbarPembayaran";

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
import { CardPembayaran } from "../../../assets/components/cards/CardPembayaran";

export const Pembayaran = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarPembayaran />

      {/* First Container */}
      <div className="mt-[5rem] shadow-lg h-[10rem] px-80">
        {/* Button Back */}
        <div className="flex pt-5 items-center gap-1 text-lg font-bold relative">
          <GoArrowLeft
            size={30}
            className="cursor-pointer absolute -inset-x-10"
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

      <div className="flex flex-cols-2 gap-10">
        {/* Payment Method */}
        <div className="flex flex-col px-4 w-[40%] ml-[12rem] gap-1">
          <div className="flex flex-col py-8 text-center gap-2">
            <div className="py-4 flex items-center text-xl text-white bg-gray-700 rounded-xl">
              <div className="flex items-center w-full justify-between px-4">
                <div className="font-semibold">Bank Transfer</div>
                <div className="">
                  <GoChevronDown />
                </div>
              </div>
            </div>

            <div className="py-4 flex items-center text-xl text-white bg-primary rounded-xl gap-3 pt-3">
              <div className="flex items-center w-full justify-between px-4">
                <div className="font-semibold">Credit Card</div>
                <div className="">
                  <GoChevronUp />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Detail*/}
          <div className="flex flex-col px-4 w-full gap-4 ">
            {/* Payment Card Logo*/}
            <div className="flex items-center justify-between px-4 w-[40%] gap-3 mx-auto ">
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
            <div className="flex flex-col gap-2">
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
                    className="px-3 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                    type="text"
                    id="card"
                  />
                </div>

                <div className="flex flex-col w-1/2 justify-between px-4">
                  <div className="font-bold text-xl">Expiry Date</div>
                  <input
                    placeholder="07/24"
                    className="px-3 py-3 border-b-2 border-slate-300 focus:outline-none focus:border-primary"
                    type="text"
                    id="card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-6 py-3 border-2 border-slate-300 rounded-xl focus:outline-none w-[30%] ml-[2rem] gap-2 mt-8 shadow-lg">
          <div className="font-bold text-2xl flex flex-col gap-4">
            Pembayaran Kelas
          </div>
          <div>
            {/* Main Content */}
            <div className="grid w-full grid-col gap-6">
              {/* Card Item */}
              <CardPembayaran
                category={"UI/UX DESIGN"}
                title={"Intro to Basic of User Interaction Design"}
                author={"Simon Doe"}
              />
            </div>

            <div className="flex flex-cols-3 gap-2 px-6 py-3 items-center">
              <div className="flex flex-col w-1/3 justify-between">
                <div className="font-bold text-2xl">Harga</div>
                <div className="font-semibold text-xl">Rp 349,000</div>
              </div>

              <div className="flex flex-col w-1/3 justify-between">
                <div className="font-bold text-2xl">PPN 11%</div>
                <div className="font-semibold text-xl">Rp 38,390</div>
              </div>

              <div className="flex flex-col w-1/3 justify-between">
                <div className="font-bold text-2xl ">Total Bayar</div>
                <div className="text-primary font-semibold text-xl">
                  Rp 387,390
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-2 px-6 py-2 text-white cursor-pointer w-full mt-4 bg-red-500 rounded-2xl">
              <div className="font-bold text-xl text-center">Bayar dan Ikuti Kelas Selamanya</div>
              <div>
                <HiArrowCircleRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
