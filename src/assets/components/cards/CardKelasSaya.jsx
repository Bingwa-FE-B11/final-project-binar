import React from 'react';

// Images
import uiux from '../../img/uiux.webp';

// Icons
import { FaStar } from 'react-icons/fa';
import { RiShieldStarLine } from 'react-icons/ri';
import { LiaBookSolid } from 'react-icons/lia';
import { IoTime } from 'react-icons/io5';
import { TbProgressCheck } from 'react-icons/tb';

export const CardKelasSaya = ({
  category,
  rating,
  title,
  author,
  level,
  modul,
  duration,
  progress,
}) => {
  return (
    <div className="flex flex-col overflow-hidden shadow-md rounded-2xl bg-white">
      <div
        className="h-32 scale-105 bg-center bg-no-repeat min-w-fit"
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
        <div className="flex flex-col">
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
        <div className="flex items-center justify-between gap-2 w-fit rounded-3xl">
          <TbProgressCheck size={20} color="#22c55e" />
          <div className="px-3 py-1 font-bold text-white rounded-3xl bg-blue">
            {progress}% Completed
          </div>
        </div>
      </div>
    </div>
  );
};
