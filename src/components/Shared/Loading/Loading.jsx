"use client";

import loading from "@/assets/animation/loading.json";
import Lottie from "lottie-react";
import dynamic from "next/dynamic";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie animationData={loading} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: false });
