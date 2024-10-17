"use client";

import { featuredRecipeData } from "@/utils/SectionData/SectionData";
import Image from "next/image";
import { useState } from "react";
import anim from "@/assets/animation/featuredRecipe.json";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";

const FeaturedRecipe = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };
  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="bg-primary-white font-poppins py-16 lg:py-28 px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <h1 className="lg:text-5xl text-2xl font-bold text-center text-dark-green">
            Taste the Best – Handpicked Recipes for You
          </h1>
          <p className="lg:text-xl lg:mt-4 text-center text-dark-green">
            Explore trending and highly-rated recipes from our vibrant cooking
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
          {featuredRecipeData?.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-8 gap-5 items-center bg-light-green p-7 rounded-md shadow-sm cursor-pointer ${
                isHovered === index &&
                "-translate-y-3 transition-all duration-300 ease-in-out"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="lg:col-span-6 col-span-8">
                <h1 className="text-dark-green font-bold lg:text-xl mb-4">
                  {item.name}
                </h1>
                <p className=" text-dark-green">{item.description}</p>
                <Lottie
                  className="w-14 mt-4 hidden lg:block"
                  animationData={anim}
                />
              </div>
              <Image
                src={item.image}
                className={`${
                  isHovered === index &&
                  "shadow-md p-3 rounded-lg bg-dark-green transition-all duration-300 ease-in-out"
                } lg:col-span-2 col-span-8 mx-auto`}
                alt={item.name}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FeaturedRecipe), { ssr: false });
