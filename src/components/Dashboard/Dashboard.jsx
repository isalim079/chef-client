"use client";

import dynamic from "next/dynamic";
import ProfileSection from "./ProfileSection/ProfileSection";

const Dashboard = () => {
  return (
    <div>
      <ProfileSection />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
