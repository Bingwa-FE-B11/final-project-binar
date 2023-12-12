import React from 'react';

// Images
import uiux from '../../img/uiux.webp';

export const CardPembayaran = ({ category,  title, author}) => {
    return (
        <div className="flex flex-col overflow-hidden shadow-md rounded-2xl bg-white">
          <div
            className="h-32 scale-105 bg-center bg-no-repeat min-w-fit"
            style={{ backgroundImage: `url(${uiux})` }}
          ></div>
          {/* Container Desc Card Kelas */}
          <div className="flex flex-col px-4 py-3 bg-white">
            <div className="flex justify-between">
              <div className="text-xl font-bold text-primary">{category}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold text-lg text-slate-800">{title}</div>
              <div className="text-slate-500 text-lg">by {author}</div>
            </div>
          </div>
        </div>
      );
    };
    