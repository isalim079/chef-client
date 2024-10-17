"use client";

import { communityData } from "@/utils/SectionData/SectionData";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const OurCommunity = () => {

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
        {/* title section */}
        <div className="text-dark-green">
          <h1 className="lg:text-5xl text-2xl font-bold text-center ">
            What’s Cooking in Our Community?
          </h1>
          <p className="lg:text-xl lg:mt-4 text-center ">
            Explore trending recipes, exciting events, and inspiring stories
            from our passionate cooking community.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {communityData?.map((item, index) => (
            <div
              key={index}
              className={`grid  grid-cols-8 items-center gap-10 bg-light-green p-8 rounded-md cursor-pointer ${
                isHovered === index &&
                "shadow-md -translate-y-3 transition-all duration-300 ease-in-out"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`lg:col-span-6 col-span-8 ${
                  item.id % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <p className="text-xl lg:text-2xl text-dark-green font-bold mb-4">{item.title}</p>
                <p className="lg:text-lg">{item.description}</p>
              </div>
              <div
                className={`lg:col-span-2 col-span-8 mx-auto  ${
                  item.id % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Lottie className={`w-52  ${
                  isHovered === index &&
                  "shadow-md p-3 rounded-lg bg-primary-white transition-all duration-300 ease-in-out"
                }`} animationData={item?.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(OurCommunity), { ssr: false });
