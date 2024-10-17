"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const HeroSection = () => {
  return (
    <div className="font-poppins bg-primary-white pt-40 lg:pt-36">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:flex items-center justify-between px-6 lg:px-0 ">
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="text-2xl lg:text-5xl font-bold text-dark-green text-center lg:text-start">
              Welcome to the Recipe Sharing Community
            </h1>
            <p className="text-lg lg:max-w-[75%] mt-3 lg:mt-7 text-dark-green text-justify lg:text-start">
              Discover, Share, and Organize Your Favorite Recipes with Cooks
              from Around the World.
            </p>
            <div className=" mt-6 lg:mt-14 flex justify-center lg:justify-start mb-10 lg:mb-0">
              <button className="bg-dark-green text-primary-white px-4 py-3 rounded-md flex items-center gap-3">
                Recipe Feed{" "}
                <BsArrowRightCircle className="text-primary-white text-xl" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col lg:justify-end  justify-center">
            <Image width={520} height={100} src="https://i.ibb.co.com/bsjp9B7/heroImg.png" alt="Banner Image" className="" />
            <div className="border-2 border-dark-green lg:max-w-[85%] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false})
