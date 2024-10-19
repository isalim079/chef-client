"use client";

import Loading from "../shared/Loading/Loading";
import Image from "next/image";
import { BiDislike, BiLike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const RecipeFeed = () => {
  const [allRecipeData, setAllRecipeData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/allRecipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllRecipeData(data.data);
        setLoading(false);
      });
  }, []);

  // console.log(allRecipeData);

  return (
    <div className="pt-28">
      <div className="max-w-screen-xl mx-auto font-poppins">
        {/* Title section */}
        <div>
          <h1 className="text-center text-4xl font-bold uppercase text-dark-green">
            Welcome to your recipe feed
          </h1>
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="mt-20">
              {allRecipeData?.map((item, index) => (
                <div key={index} className="mb-20 ">
                  <div>
                    {/* title section */}
                    <div className="flex items-center justify-between">
                      <div>
                        <Image
                          className="rounded-full"
                          width={60}
                          height={60}
                          src={item.profileImg}
                          alt="profile picture"
                        />
                        <p className="mt-2 font-semibold text-xl">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <h3 className=" text-dark-green text-lg">
                          <span className="font-bold mr-3">Recipe Name:</span>{" "}
                          {item?.title}
                        </h3>
                      </div>
                    </div>
                    {/* divider */}
                    <div className="border my-5"></div>

                    {/* recipe formula */}
                    <div className="prose">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.recipe }}
                      ></div>
                    </div>

                    {/* Micro elements */}
                    <div>
                      <div className="text-2xl gap-10 flex justify-end">
                        {/* Up vote */}
                        <div>
                          <button className="border border-dark-green p-2 rounded-full">
                            <BiLike />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">
                            {item.upvote}
                          </p>
                        </div>

                        {/* Down vote */}
                        <div>
                          <button className="border border-dark-green p-2 rounded-full">
                            <BiDislike />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">
                            {item.downvote}
                          </p>
                        </div>

                        {/* Comments */}
                        <div>
                          <button className="border border-dark-green p-2 rounded-full">
                            <LiaCommentSolid />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">
                            {item?.comments?.length}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(RecipeFeed), { ssr: false });
