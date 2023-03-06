import React, { Component, useCallback, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

export const ArrowForwardIcon = () => <BsArrowRight size={40} color='gray' />;

const PrevButton = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 14.25L4.5 9.75L9 5.25'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

// Custom next button
const NextButton = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <svg viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M9 5.25L13.5 9.75L9 14.25'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};

const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const goToNextSlide = useCallback(() => {
    sliderRef.current.slickNext();
  }, [sliderRef]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    //   prevArrow: <PrevButton />,
    //   nextArrow: <NextButton />,
  };

  return (
    <div className='relative'>
      <Slider {...settings} ref={sliderRef}>
        <div className='h-24'>
          <Image
            src='/slick/image1.png'
            alt='slick image'
            width='340'
            height='150'
          />
        </div>
        <div>
          <Image
            src='/slick/image2.png'
            alt='slick image'
            width='340'
            height='150'
          />
        </div>
        <div>
          <Image
            src='/slick/image3.png'
            alt='slick image'
            width='340'
            height='150'
          />
        </div>
      </Slider>
      <div className='absolute flex right-[-16px] top-[50%]'>
        <button
          className='block bg-white/80 hover:bg-white text-[#0D9206] rounded-full py-2 px-4 mr-4'
          onClick={goToNextSlide}
        >
          See more photos
        </button>
        <button
          className='shadow-md block bg-white/80 hover:bg-white text-[#0D9206] rounded-full py-2 px-2 '
          onClick={goToNextSlide}
        >
          <BsArrowRight className='block w-6 h-6 justify-center items-center' />
        </button>
      </div>
    </div>
  );
};
export default SimpleSlider;
