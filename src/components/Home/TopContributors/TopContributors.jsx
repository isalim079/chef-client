"use client";

import { topContributorsData } from "@/utils/SectionData/SectionData";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const TopContributors = () => {
  return (
    <div className="bg-dark-green font-poppins py-16 lg:py-28 px-6 lg:px-0">
      <div className="max-w-screen-xl mx-auto">
        {/* title section */}
        <div className="text-primary-white">
          <h1 className="lg:text-5xl text-2xl font-bold text-center ">
            Meet Our Star Cooks
          </h1>
          <p className="lg:text-xl lg:mt-4 text-center ">
            Discover recipes from top contributors and passionate food
            enthusiasts in our community.
          </p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          {topContributorsData?.map((item, index) => (
            <div
              key={index}
              className="bg-primary-white px-7 py-10 rounded-md cursor-pointer hover:bg-transparent hover:border-2 hover:border-primary-white hover:text-primary-white hover:shadow-md hover:-translate-y-3 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={item.profileImage}
                  alt={item.username}
                  className="rounded-full"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h1 className="text-center font-bold text-xl mt-7">
                  {item.username}
                </h1>
                <p className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-lg">Total Recipe:</span>{" "}
                  {item.recipesPosted}
                </p>
                <p className="mt-2 flex items-center justify-between">
                  <span className="font-semibold text-lg">Votes:</span>{" "}
                  {item.upvotes}
                </p>
                <div>
                  <p className="mt-2 flex items-center justify-between">
                    <span className="font-semibold text-lg">Top recipe:</span>{" "}
                    {item.featuredRecipe.name}
                  </p>
                </div>
                <div className=" mt-10 lg:mt-14 flex justify-center mb-10 lg:mb-0">
                  <button className="bg-dark-green text-primary-white px-4 py-3 rounded-md flex items-center gap-3 hover:border hover:border-primary-white hover:shadow-md transition-all duration-300 ease-in-out">
                    More Recipe
                    <BsArrowRightCircle className="text-primary-white text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TopContributors), { ssr: false });
