import React from 'react';

// Images
import uiux from '../../img/uiux.webp';

export const CardKategory = ({ thumbnail, category }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={uiux} alt="UI/UX Design" />
      <div className="font-semibold">{category}</div>
    </div>
  );
};
