"use client";
import Lottie from "lottie-react";
import notFound from "../../../assets/animation/notFound.json";
import Link from "next/link";
import dynamic from "next/dynamic";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Lottie animationData={notFound} />
      <p className="font-poppins font-semibold text-xl mt-5 text-center">
        You came to wrong route.{" "}
        <span className="block">Please go back to</span>
      </p>
      <div>
        <Link href={"/"}>
          {" "}
          <button className="px-4 py-2 bg-dark-green text-primary-white rounded-md shadow-md mt-10">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(NotFound), { ssr: false });
