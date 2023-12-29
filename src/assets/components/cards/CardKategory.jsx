import React from "react";

export const CardKategory = ({ thumbnail, category }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2 hover:scale-95 transition-all">
      <img src={thumbnail} alt="Thumbnail" className="w-52 rounded-2xl" />
      <div className="font-semibold">{category}</div>
    </div>
  );
};
