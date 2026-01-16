import React from 'react';
import { saleImgOne } from '../assets/images';

const Sale = () => {
  return (
    <div className="w-full h-auto md:h-[550px] flex flex-col
    md:flex-row items-center justify-between gap-10">
      {/*for left*/}
      <div className="w-full h-[250px] md:h-full border
      border-gray-300 rounded-md overflow-hidden relative
      group">
        <img src={saleImgOne} alt="saleImgOne" />
      </div>
      {/*for right*/}
      <div>
       right side
      </div>
    </div>
  );
};

export default Sale;
