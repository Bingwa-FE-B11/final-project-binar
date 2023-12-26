import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Icons
import { FaStar } from 'react-icons/fa';
import { RiShieldStarLine } from 'react-icons/ri';
import { LiaBookSolid } from 'react-icons/lia';
import { IoTime } from 'react-icons/io5';
import { TbProgressCheck } from 'react-icons/tb';

// Redux
import { getDetailCoursesAction } from '../../../redux/action/courses/getDetailCourseAction';

export const CardKelasSaya = ({
  image,
  category,
  rating,
  title,
  author,
  level,
  modul,
  duration,
  progress,
  courseId,
}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(getDetailCoursesAction(courseId));
    navigate(`/detail-kelas/${courseId}`);
  };

  return (
    <div className="flex flex-col cursor-pointer overflow-hidden shadow-md rounded-2xl bg-white hover:scale-95">
      <div
        className="h-32 scale-105 bg-center bg-no-repeat min-w-fit"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', objectFit: 'cover' }}
        onClick={handleCardClick}
      ></div>
      {/* Container Desc Card Kelas */}
      <div className="flex flex-col gap-4 px-4 py-3 bg-white">
        <div className="flex justify-between">
          <div className="text-lg font-bold text-primary">{category}</div>
          <div className="flex items-center gap-1">
            <div className="text-yellow-700">
              <FaStar />
            </div>
            <div className="font-bold">{rating}4.9</div>
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
            <div className="text-sm font-semibold text-primary">{modul}0 Modul</div>
          </div>
          <div className="flex items-center gap-1">
            <IoTime size={20} color="#22c55e" />
            <div className="text-sm font-semibold text-primary">{duration}</div>
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
