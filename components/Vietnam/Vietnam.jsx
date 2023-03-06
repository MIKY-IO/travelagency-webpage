import React from "react";
import Image from "next/image";
import Slick from "../Slick";
import SocialIcons from "../SocialIcons";
import NextPageButtons from "../NextPageButton";
import classNames from "classnames";
import styles from "./Vietnam.module.css";

const Vietnam = () => {
  return (
    <div>
      <div className="py-2 flex justify-left items-center">
        <h2 className="block text-xl text-gray-400 text-left">
          Vietnam section
        </h2>
        <a
          target="_blank"
          className="px-4 hover:underline block text-xl text-gray-400"
          href="https://xd.adobe.com/view/54ef6a19-1ee0-4165-ba71-e077c2ebea7c-01bc/"
        >
          {"["}specification link{"]"}
        </a>
      </div>

      <div className="w-full max-w-6xl  border-gray-300 border-dashed border-2 lg:flex p-16">
        <div className="relative w-full lg:w-1/2 flex items-center justy-center lg:block">
          <div className="absolute -left-11 top-[20%]">
            <SocialIcons />
          </div>
          <div className="absolute bottom-0">
            <NextPageButtons />
          </div>
          <div className="z-10 absolute p-4 bg-white lg:w-5/12 w-full sm:w-1/2 rounded-md lg:right-[24px] top-0 shadow-md">
            <p className="text-xl text-left py-1 font-bold text-[#0D9206]">
              2 Days
            </p>
            <span className="block w-3/4 h-[2px] bg-[#FF8800]"></span>
            <p className="text-lg text-left pt-2 text-gray-800">
              $166 per person
            </p>
          </div>
          <Image
            id={styles.vietnamImage}
            src="/main.png"
            alt="Main Image"
            width={500}
            height={500}
          />
        </div>

        <div className="w-full lg:w-1/2 ">
          <div className="">
            <h2
              className={classNames(
                "text-5xl font-sans font-bold drop-shadow-2xl text-gray-800 text-left",
                styles.h2
              )}
            >
              Mekong <span className="block">Delta</span> Tour,
              <span className="text-[#0D9206] font-bold pl-8">Vietnam</span>
            </h2>
          </div>
          <div className="border-[#0D9206] border-l-2 px-4 my-4 relative">
            <p className="text-justify text-gray-700 text-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
              dui id ligula cursus cursus vel in ligula. Vestibulum id nibh ut
              diam tincidunt luctus sit amet vel dui. In finibus feugiat lacus.
              Ut sit amet placerat orci. Sed varius quis lacus sit amet aliquet.
            </p>
            <div className="pt-4 flex items-start">
              {/* <button className="px-4 py-2 text-m bg-[#FF8800] text-white">
              Book Now
            </button> */}
              <button className="px-6 py-2 text-m bg-[#FF8800] text-white btn relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-[#FF8800] group">
                <span className="w-0 h-0 bg-[#0D9206] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>{" "}
                <span className="w-full text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                  Book Now
                </span>
              </button>
            </div>
            <div className="absolute top-[-80px] right-[-64px]">
              <Image
                src="/svg/grid-element.svg"
                alt="grid"
                width="65"
                height="65"
              />
            </div>
          </div>
          <div>
            <Slick />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vietnam;
