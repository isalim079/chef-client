"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import Loading from "@/components/Shared/Loading/Loading";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaInfo, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyRecipe = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  const [recipeData, setRecipeData] = useState([]);

  const getMyRecipe = async () => {
    if (user) {
      await axiosPublic.get(`/myRecipe?email=${user?.email}`).then((res) => {
        setRecipeData(res.data.data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    try {
      getMyRecipe();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this post!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/myRecipe/${id}`);
        if (res.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Post has been deleted.",
            icon: "success",
          });

          getMyRecipe();
        }
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-center lg:text-4xl text-lg font-semibold mt-10 mb-14">
          My Recipe
        </h1>
      </div>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            {recipeData?.map((item, index) => (
              <div key={index}>
                <div className="">
                  <div className="flex justify-between items-center px-10">
                    <div className="flex items-center gap-5">
                      <p>
                        <span className="font-semibold mr-2">
                          #{index + 1}.
                        </span>
                        {item.title}
                      </p>
                      <Image
                        className=""
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                      />
                    </div>

                    {/* action button container */}
                    <div className="flex items-center gap-3">
                      <div className="">
                        <button
                          className="border border-red-600 rounded-full p-2 hover:bg-red-600 transition-all duration-150 ease-in-out"
                          onClick={() => handleDelete(item._id)}
                        >
                          <FaTrash className="text-red-600 text-lg hover:text-white transition-all duration-150 ease-in-out" />
                        </button>
                      </div>
                      <div className="">
                        <button className="border border-dark-green rounded-full p-2 hover:bg-dark-green transition-all duration-150 ease-in-out">
                          <FaInfo className="text-dark-green text-lg hover:text-white transition-all duration-150 ease-in-out" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 mb-10 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(MyRecipe), { ssr: false });
