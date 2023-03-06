import React from 'react';
import { BsArrowDown } from 'react-icons/bs';

const NextPageButtons = () => {
  return (
    <div className='group items-center flex space-x-2'>
      <button
        className='flex'
        onClick={() => {
          console.log('button clicked');
        }}
      >
        <div className='bg-white shadow-xl text-[#789376] rounded-full py-2 px-2'>
          <BsArrowDown className='h-5 w-5 block group-hover:text-orange-500' />
        </div>
        <p className='group-hover:text-orange-500 bg-transparent text-[#789376] rounded-full py-2 px-2 block'>
          More Short Trips
        </p>
      </button>
    </div>
  );
};

export default NextPageButtons;
