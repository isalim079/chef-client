"use client";

import Loading from "../shared/Loading/Loading";
import Image from "next/image";
import { BiDislike, BiLike } from "react-icons/bi";
import { LiaCommentSolid } from "react-icons/lia";
import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import toast from "react-hot-toast";

const RecipeFeed = () => {
  const [allRecipeData, setAllRecipeData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [rating, setRating] = useState(0);

  const getAllRecipe = async () => {
    await axiosPublic.get(`/allRecipes`).then((res) => {
      setAllRecipeData(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllRecipe();
  }, []);

  const handleRatingSubmit = async (item) => {
    console.log(item);
    if (user) {
      const ratingsData = {
        email: user.email,
        ratings: Number(rating),
      };

      await axiosPublic
        .patch(`/allRecipes/${item._id}/ratings`, ratingsData)
        .then((res) => {
          if (res.data.success) {
            toast.success("Successfully rated");
            getAllRecipe();
          }
        });
    }
  };

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
              <div className="mb-20 ml-auto max-w-40">
                <p className="mb-2 font-semibold">Sort by:</p>
                <div className=" border border-dark-green  p-2 rounded-md shadow-md">
                  <select value="rating" className="w-full">
                    <option value="rating">Rating</option>
                    <option value="name">Name</option>
                    <option value="myPost">My Post</option>
                  </select>
                </div>
              </div>
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
                        {/* Rating */}
                        <div>
                          <button
                            className="border border-primary-orange p-2 rounded-full"
                            onClick={() =>
                              document.getElementById(`${item._id}`).showModal()
                            }
                          >
                            <FaStar className="text-primary-orange" />
                          </button>
                          <p className="text-base text-center mt-1 font-semibold">
                            {item.ratingsData.length !== 0
                              ? (
                                  item.ratingsData.reduce(
                                    (sum, rating) => sum + rating.ratings,
                                    0
                                  ) / item.ratingsData.length
                                ).toFixed(1)
                              : 0}
                          </p>

                          {/* give rating */}
                          <dialog id={`${item._id}`} className="modal">
                            <div className="modal-box">
                              <h3 className="font-bold text-lg">
                                Rate this post
                              </h3>
                              <Rating
                                initialRating={rating}
                                onClick={(value) => setRating(value)}
                                className="mt-5"
                                emptySymbol={
                                  <IoIosStarOutline className="text-primary-orange text-3xl mr-1" />
                                }
                                fullSymbol={
                                  <IoMdStar className="text-primary-orange text-3xl mr-1" />
                                }
                              />
                              <div className="modal-action">
                                <form method="dialog">
                                  {/* if there is a button in form, it will close the modal */}
                                  <button
                                    onClick={() => handleRatingSubmit(item)}
                                    className="bg-primary-orange px-4 py-2 rounded-md text-sm"
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>

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
