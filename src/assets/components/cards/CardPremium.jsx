import React from 'react';

// Images
import uiux from '../../img/uiux.webp';

// Icons
import { FaStar } from 'react-icons/fa';
import { IoDiamond, IoTime } from 'react-icons/io5';
import { LiaBookSolid } from 'react-icons/lia';
import { RiShieldStarLine } from 'react-icons/ri';

export const CardPremium = ({category, rating, title, author, level, modul, duration, kelas}) => {
  return (
    <div className="flex flex-col overflow-hidden bg-green-200 shadow-md rounded-2xl">
      <div
        className="h-32 scale-105 bg-indigo-400 bg-center bg-no-repeat min-w-fit"
        style={{ backgroundImage: `url(${uiux})` }}
      ></div>
      {/* Container Desc Card Kelas */}
      <div className="flex flex-col gap-4 px-4 py-3 bg-white">
        <div className="flex justify-between">
          <div className="text-lg font-bold text-primary">{category}</div>
          <div className="flex items-center gap-1">
            <div className="text-yellow-400">
              <FaStar />
            </div>
            <div className="font-bold">{rating}</div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <div className="font-semibold text-slate-800">{title}</div>
          <div className="text-slate-500">by {author}</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <RiShieldStarLine size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">{level} Level</div>
          </div>
          <div className="flex items-center gap-1">
            <LiaBookSolid size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">{modul} Modul</div>
          </div>
          <div className="flex items-center gap-1">
            <IoTime size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">{duration} Menit</div>
          </div>
        </div>
        <div className="flex justify-between px-4 py-1 transition-all cursor-pointer w-fit rounded-3xl bg-blue hover:bg-blue-hover">
          <div className="flex items-center gap-2">
            <IoDiamond size={20} color="white" />
            <div className="font-bold text-white">{kelas}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
