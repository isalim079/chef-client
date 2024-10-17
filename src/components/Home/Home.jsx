"use client";

import dynamic from "next/dynamic";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedRecipe from "./FeaturedRecipe/FeaturedRecipe";
import TopContributors from "./TopContributors/TopContributors";
import OurCommunity from "./OurCommunity/OurCommunity";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedRecipe />
      <TopContributors />
      <OurCommunity />
    </div>
  );
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
