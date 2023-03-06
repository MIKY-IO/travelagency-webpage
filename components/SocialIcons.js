import { useState } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='flex flex-col mt-4 '>
      <a
        href='https://www.facebook.com/q2interactivecz/?locale=cs_CZ'
        target='_blank'
        rel='noopener noreferrer'
        className='group'
      >
        <div
          className={`bg-white w-10 h-10 group-hover:w-full border border-[#0D9206] group-hover:border-none group-hover:bg-[#789376] rounded-full px-2 flex items-center justify-center transition-all cursor-pointer`}
        >
          <FaFacebookF className='text-black w-5 h-5 block group-hover:text-white' />

          <span className='hidden group-hover:block ml-2 text-white h-6'>
            Lorem Ipsum
          </span>
        </div>
      </a>
      <div className='mt-4'>
        <a
          href='https://www.twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          className='group'
        >
          <div
            className={`bg-white w-10 h-10 group-hover:w-full border border-[#0D9206] group-hover:border-none group-hover:bg-[#789376] rounded-full px-2 flex items-center justify-center transition-all cursor-pointer`}
          >
            <FaTwitter className='text-black w-5 h-5 block group-hover:text-white' />

            <span className='hidden group-hover:block ml-2 text-white h-6'>
              Lorem Ipsum
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default SocialIcons;
