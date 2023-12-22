import React from "react";


export const CardKategory = ({ thumbnail, category }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer hover:scale-95">
      <img src={thumbnail} alt="Thumbnail" className="w-52 rounded-2xl" />
      <div className="font-semibold">{category}</div>
    </div>
  );
};
