import React from 'react';

// Images
import uiux from '../../img/uiux.webp';

// Icons
import { FaStar } from 'react-icons/fa';
import { RiShieldStarLine } from 'react-icons/ri';
import { LiaBookSolid } from 'react-icons/lia';
import { IoDiamond, IoTime,iconDiamond } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


//Redux

export const CardGlobal = ({
  image,
  category,
  rating,
  title,
  author,
  level,
  modul,
  duration,
  categoryId,
  isPremium,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div
        className="h-32 min-w-fit scale-105 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Container Desc Card Kelas */}
      <div className="flex flex-col gap-4 bg-white px-4 py-3">
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
            <div className="text-sm font-semibold text-primary">{level}</div>
          </div>
          <div className="flex items-center gap-1">
            <LiaBookSolid size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">
              {modul} Modul
            </div>
          </div>
          <div className="flex items-center gap-1">
            <IoTime size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">{duration}</div>
          </div>
        </div>
        {isPremium ? (
          <div className="flex w-fit cursor-pointer justify-between rounded-3xl bg-blue px-4 py-1 transition-all hover:bg-blue-hover">
            <div className="flex items-center gap-2">
              <IoDiamond size={20} color="white" />
              <div className="font-bold text-white">Premium</div>
            </div>
          </div>
        ) : (
          <div className="w-fit cursor-pointer rounded-3xl bg-green px-4 py-1 text-white transition-all hover:bg-blue-hover">
            Mulai Kelas
          </div>
        )}
      </div>
    </div>
  );
};